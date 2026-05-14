import json
import os
import urllib.request
import urllib.error


def handler(event: dict, context) -> dict:
    """
    AI-помощник для студентов — отвечает на вопросы, решает задачи,
    помогает с текстовыми работами, презентациями и подготовкой к экзаменам.
    """

    cors_headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Max-Age': '86400',
        'Content-Type': 'application/json',
    }

    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': cors_headers, 'body': ''}

    body = json.loads(event.get('body') or '{}')
    tool = body.get('tool', 'tasks')
    question = body.get('question', '').strip()
    subject = body.get('subject', '')

    if not question:
        return {
            'statusCode': 400,
            'headers': cors_headers,
            'body': json.dumps({'error': 'Вопрос не может быть пустым'}, ensure_ascii=False),
        }

    system_prompts = {
        'tasks': (
            f"Ты опытный репетитор и помогаешь студентам решать задачи по предмету «{subject}». "
            "Объясняй подробно, пошагово, простым языком. "
            "Показывай ход решения, используй формулы там где нужно. "
            "В конце давай чёткий ответ. Отвечай на русском языке."
        ),
        'text': (
            "Ты академический ассистент, помогаешь студентам писать учебные работы: "
            "рефераты, курсовые, эссе. Составляй чёткий план, предлагай тезисы. "
            "Следуй академическому стилю. Отвечай на русском языке."
        ),
        'presentation': (
            "Ты помогаешь создавать презентации для учёбы. "
            "Предлагай структуру слайдов, ключевые тезисы, советы по оформлению. "
            "Делай акцент на логике подачи. Отвечай на русском языке."
        ),
        'exam': (
            "Ты помогаешь студентам готовиться к экзаменам. "
            "Объясняй темы простым языком, выделяй самое важное, "
            "предлагай вопросы для самопроверки. Отвечай на русском языке."
        ),
    }

    system_prompt = system_prompts.get(tool, system_prompts['tasks'])

    api_key = os.environ.get('OPENAI_API_KEY', '')
    if not api_key:
        return {
            'statusCode': 500,
            'headers': cors_headers,
            'body': json.dumps({'error': 'API ключ не настроен'}, ensure_ascii=False),
        }

    payload = json.dumps({
        'model': 'gpt-4o-mini',
        'messages': [
            {'role': 'system', 'content': system_prompt},
            {'role': 'user', 'content': question},
        ],
        'max_tokens': 1500,
        'temperature': 0.7,
    }).encode('utf-8')

    req = urllib.request.Request(
        'https://api.openai.com/v1/chat/completions',
        data=payload,
        headers={
            'Authorization': f'Bearer {api_key}',
            'Content-Type': 'application/json',
        },
        method='POST',
    )

    try:
        with urllib.request.urlopen(req, timeout=25) as resp:
            data = json.loads(resp.read().decode('utf-8'))
    except urllib.error.HTTPError as e:
        err_body = e.read().decode('utf-8')
        return {
            'statusCode': 502,
            'headers': cors_headers,
            'body': json.dumps({'error': f'Ошибка OpenAI: {e.code}', 'detail': err_body}, ensure_ascii=False),
        }

    answer = data['choices'][0]['message']['content']

    return {
        'statusCode': 200,
        'headers': cors_headers,
        'body': json.dumps({'answer': answer}, ensure_ascii=False),
    }
