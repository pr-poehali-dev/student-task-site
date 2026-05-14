import { useState } from 'react';
import Icon from '@/components/ui/icon';

interface TasksPageProps {
  onNavigate: (page: string) => void;
}

type Tool = 'text' | 'tasks' | 'presentation' | 'exam';

const tools: { id: Tool; icon: string; label: string; color: string; desc: string }[] = [
  { id: 'text', icon: '📝', label: 'Текстовые работы', color: 'border-violet-500/30 bg-violet-500/5', desc: 'Рефераты, курсовые, эссе по ГОСТу' },
  { id: 'tasks', icon: '🧮', label: 'Решение задач', color: 'border-cyan-500/30 bg-cyan-500/5', desc: '160+ предметов, с объяснением' },
  { id: 'presentation', icon: '🎨', label: 'Презентации', color: 'border-pink-500/30 bg-pink-500/5', desc: 'Слайды по академическим стандартам' },
  { id: 'exam', icon: '🎓', label: 'Экзамены', color: 'border-amber-500/30 bg-amber-500/5', desc: 'Билеты, повторение, диалог' },
];

const subjects = ['Математика', 'Физика', 'История', 'Право', 'Экономика', 'Программирование', 'Химия', 'Биология'];

const mockHistory = [
  { id: 1, tool: 'text', title: 'Курсовая: Влияние цифровизации на экономику', date: '14 мая', status: 'done' },
  { id: 2, tool: 'tasks', title: 'Задача по теормеху — вращательное движение', date: '13 мая', status: 'done' },
  { id: 3, tool: 'exam', title: 'Подготовка к экзамену по истории России', date: '12 мая', status: 'done' },
  { id: 4, tool: 'presentation', title: 'Презентация: Искусственный интеллект в медицине', date: '10 мая', status: 'done' },
];

const toolIcon: Record<Tool, string> = { text: '📝', tasks: '🧮', presentation: '🎨', exam: '🎓' };

const TasksPage = ({ onNavigate }: TasksPageProps) => {
  const [activeTool, setActiveTool] = useState<Tool>('tasks');
  const [input, setInput] = useState('');
  const [subject, setSubject] = useState('Математика');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const placeholders: Record<Tool, string> = {
    text: 'Напиши тему курсовой работы или вставь задание...',
    tasks: 'Вставь текст задачи или опиши что нужно решить...',
    presentation: 'Тема презентации, количество слайдов, цель...',
    exam: 'Вопрос из билета или тема для повторения...',
  };

  const AI_URL = 'https://functions.poehali.dev/26db31f2-5d86-4d37-97b6-655351c56659';

  const handleAsk = async () => {
    if (!input.trim()) return;
    setIsLoading(true);
    setResult(null);
    setError(null);
    try {
      const resp = await fetch(AI_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tool: activeTool, question: input, subject }),
      });
      const data = await resp.json();
      if (!resp.ok) throw new Error(data.error || 'Ошибка сервера');
      setResult(data.answer);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : 'Что-то пошло не так');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Header */}
      <div className="bg-card/40 border-b border-border py-8 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-black">AI-инструменты</h1>
              <p className="text-muted-foreground text-sm mt-1">Выбери инструмент и задай вопрос</p>
            </div>
            <div className="flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-xl px-4 py-2">
              <Icon name="Zap" size={14} className="text-amber-400" />
              <span className="text-xs font-semibold text-amber-400">3 из 5 запросов</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left: Tool selector + Input */}
          <div className="lg:col-span-2 space-y-5">
            {/* Tool tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {tools.map(t => (
                <button
                  key={t.id}
                  onClick={() => { setActiveTool(t.id); setResult(null); setInput(''); setError(null); }}
                  className={`rounded-xl border p-3 text-left transition-all ${
                    activeTool === t.id ? t.color : 'border-border bg-card hover:border-border/80'
                  }`}
                >
                  <div className="text-xl mb-1">{t.icon}</div>
                  <div className="text-xs font-semibold leading-tight">{t.label}</div>
                </button>
              ))}
            </div>

            {/* Subject select (for tasks) */}
            {activeTool === 'tasks' && (
              <div className="flex flex-wrap gap-2">
                {subjects.map(s => (
                  <button
                    key={s}
                    onClick={() => setSubject(s)}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                      subject === s
                        ? 'bg-primary text-white'
                        : 'bg-secondary border border-border text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {/* Input area */}
            <div className="bg-card border border-border rounded-2xl overflow-hidden">
              <textarea
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder={placeholders[activeTool]}
                rows={5}
                className="w-full bg-transparent px-5 py-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none resize-none"
              />
              <div className="flex items-center justify-between px-5 py-3 border-t border-border">
                <span className="text-xs text-muted-foreground">{input.length} символов</span>
                <button
                  onClick={handleAsk}
                  disabled={!input.trim() || isLoading}
                  className="bg-primary text-white text-sm font-bold px-6 py-2.5 rounded-xl hover:bg-primary/90 transition-all disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2 glow-primary"
                >
                  {isLoading ? (
                    <>
                      <div className="w-3.5 h-3.5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                      Обрабатываю...
                    </>
                  ) : (
                    <>
                      Спросить AI
                      <Icon name="Send" size={14} />
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Error */}
            {error && (
              <div className="bg-destructive/10 border border-destructive/30 rounded-2xl p-5 animate-fade-in">
                <div className="flex items-center gap-2 text-destructive text-sm font-semibold">
                  <Icon name="AlertCircle" size={16} />
                  {error}
                </div>
              </div>
            )}

            {/* Result */}
            {result && (
              <div className="bg-card border border-primary/30 rounded-2xl p-6 animate-slide-up">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-7 h-7 rounded-lg bg-primary glow-primary flex items-center justify-center text-white text-xs font-black">S</div>
                  <span className="text-sm font-semibold">Стади AI</span>
                  <span className="text-xs text-muted-foreground ml-auto">только что</span>
                </div>
                <div className="text-sm text-foreground leading-relaxed whitespace-pre-line">{result}</div>
                <div className="flex gap-3 mt-5 pt-4 border-t border-border">
                  <button
                    onClick={() => navigator.clipboard.writeText(result)}
                    className="border border-border text-xs font-semibold px-4 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors flex items-center gap-1.5"
                  >
                    <Icon name="Copy" size={12} />
                    Копировать
                  </button>
                  <button
                    onClick={() => { setResult(null); setInput(''); }}
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors px-2"
                  >
                    Новый запрос
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right: History */}
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-bold mb-3 text-muted-foreground uppercase tracking-wider">История</h3>
              <div className="space-y-2">
                {mockHistory.map(h => (
                  <div key={h.id} className="bg-card border border-border rounded-xl p-4 hover:border-primary/30 transition-colors cursor-pointer">
                    <div className="flex items-start gap-2.5">
                      <span className="text-base mt-0.5">{toolIcon[h.tool as Tool]}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium text-foreground truncate">{h.title}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{h.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI info */}
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span className="text-xs font-bold text-accent uppercase tracking-wider">Работает на GPT-4o</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Реальный AI отвечает на твои вопросы. Задавай что угодно — от задач по физике до написания эссе.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TasksPage;