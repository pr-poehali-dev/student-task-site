import { useState } from 'react';
import Icon from '@/components/ui/icon';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const tools = [
  {
    icon: '📝',
    color: 'from-violet-500/20 to-violet-500/5 border-violet-500/20',
    iconBg: 'bg-violet-500/20 text-violet-400',
    title: 'Текстовые работы',
    desc: 'Рефераты, курсовые, эссе — с реальными источниками и оформлением по ГОСТу. Скачай в .docx за минуты.',
    tag: 'Популярное',
  },
  {
    icon: '🧮',
    color: 'from-cyan-500/20 to-cyan-500/5 border-cyan-500/20',
    iconBg: 'bg-cyan-500/20 text-cyan-400',
    title: 'Решение задач',
    desc: 'AI обучен на студенческих работах. Решит и объяснит задание по 160+ предметам — от математики до права.',
    tag: '160+ предметов',
  },
  {
    icon: '🎨',
    color: 'from-pink-500/20 to-pink-500/5 border-pink-500/20',
    iconBg: 'bg-pink-500/20 text-pink-400',
    title: 'Презентации',
    desc: 'Создаёт слайды с оформлением по академическим стандартам. Структура, тезисы, дизайн — всё включено.',
    tag: 'Быстро',
  },
  {
    icon: '🎓',
    color: 'from-amber-500/20 to-amber-500/5 border-amber-500/20',
    iconBg: 'bg-amber-500/20 text-amber-400',
    title: 'Подготовка к экзаменам',
    desc: 'Разбирает билеты, объясняет темы простым языком и проверяет твои знания в формате диалога.',
    tag: 'Эффективно',
  },
];

const stats = [
  { value: '500 000+', label: 'студентов' },
  { value: '160+', label: 'предметов' },
  { value: '4.8★', label: 'рейтинг в сторах' },
  { value: '2 мин', label: 'среднее время ответа' },
];

const reviews = [
  {
    name: 'Алина К.',
    uni: 'МГУ, 3 курс',
    text: 'Сдала курсовую на отлично! AI сам нашёл источники и оформил по ГОСТу — я только проверила.',
    avatar: 'АК',
    color: 'bg-violet-500',
  },
  {
    name: 'Денис П.',
    uni: 'ИТМО, магистратура',
    text: 'Готовился к экзамену по теормеху — за два дня разобрал все типы задач. Реально помогает понять.',
    avatar: 'ДП',
    color: 'bg-cyan-500',
  },
  {
    name: 'Маша В.',
    uni: 'ВШЭ, 2 курс',
    text: 'Делала презентацию для защиты за 20 минут. Преподаватель спросил, кто дизайнер 😂',
    avatar: 'МВ',
    color: 'bg-pink-500',
  },
];

const faqs = [
  {
    q: 'Это не плагиат?',
    a: 'Нет. AI помогает тебе разобраться в теме и структурировать мысли — как репетитор. Уникальность текста определяешь ты сам.',
  },
  {
    q: 'Какие предметы поддерживаются?',
    a: 'Более 160 дисциплин: математика, физика, история, право, экономика, программирование, иностранные языки и многое другое.',
  },
  {
    q: 'Можно отменить подписку?',
    a: 'Да, в любой момент из личного кабинета. Доступ остаётся до конца оплаченного периода.',
  },
  {
    q: 'Есть ли мобильное приложение?',
    a: 'Да, доступны приложения для iOS и Android, а также Telegram-бот для быстрого доступа.',
  },
  {
    q: 'Как работает бесплатный план?',
    a: 'Бесплатно даём 5 запросов в сутки — достаточно, чтобы попробовать все инструменты перед подпиской.',
  },
];

const plans = [
  {
    id: 'free',
    name: 'Бесплатно',
    price: '0',
    period: '',
    desc: 'Попробовать без риска',
    features: ['5 запросов в сутки', 'Все 4 инструмента', 'Telegram-бот', 'Базовые источники'],
    cta: 'Начать бесплатно',
    highlight: false,
  },
  {
    id: 'pro',
    name: 'Про',
    price: '299',
    period: '/ мес',
    desc: 'Для активной учёбы',
    features: [
      'Безлимитные запросы',
      'Приоритетная обработка',
      'Скачивание в .docx / .pptx',
      'Реальные научные источники',
      'История запросов',
    ],
    cta: 'Подключить',
    highlight: true,
  },
  {
    id: 'max',
    name: 'Макс',
    price: '599',
    period: '/ мес',
    desc: 'Для серьёзных результатов',
    features: [
      'Всё из Про',
      'GPT-4o модель',
      'Антиплагиат-проверка',
      'Персональный ассистент',
      'Приоритетная поддержка',
    ],
    cta: 'Подключить',
    highlight: false,
  },
];

const HomePage = ({ onNavigate }: HomePageProps) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="font-sans text-foreground">

      {/* ── HERO ─────────────────────────────────────── */}
      <section className="hero-mesh relative min-h-screen flex items-center pt-16 overflow-hidden">
        {/* Decorative orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/8 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 py-20 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-8 animate-slide-up">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-xs font-semibold text-primary uppercase tracking-widest">AI-помощник для студентов</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6 animate-slide-up delay-100">
            Учись умнее —<br />
            <span className="text-gradient">не усерднее</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up delay-200 leading-relaxed">
            Стади решает задачи, пишет работы, создаёт презентации и готовит к экзаменам.
            Искусственный интеллект, который учится вместе с тобой.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up delay-300">
            <button
              onClick={() => onNavigate('register')}
              className="bg-primary text-white font-bold px-8 py-4 rounded-xl text-base hover:bg-primary/90 transition-all glow-primary"
            >
              Начать бесплатно →
            </button>
            <button
              onClick={() => onNavigate('features')}
              className="border border-border text-foreground font-semibold px-8 py-4 rounded-xl text-base hover:bg-secondary transition-colors"
            >
              Смотреть возможности
            </button>
          </div>

          <p className="text-xs text-muted-foreground mt-5 animate-slide-up delay-400">
            Без карты · 5 бесплатных запросов каждый день
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 animate-slide-up delay-500">
            {stats.map(s => (
              <div key={s.label} className="bg-card/60 border border-border rounded-2xl p-5 backdrop-blur-sm">
                <div className="text-3xl font-black text-gradient">{s.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TOOLS ────────────────────────────────────── */}
      <section id="features" className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Инструменты</span>
            <h2 className="text-4xl md:text-5xl font-black mt-3 mb-4">
              Всё что нужно для учёбы
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Четыре AI-инструмента, обученных специально на студенческих задачах
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {tools.map((t, i) => (
              <div
                key={t.title}
                className={`group relative bg-gradient-to-br ${t.color} border rounded-2xl p-7 card-glow overflow-hidden`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl ${t.iconBg} flex items-center justify-center text-2xl shrink-0`}>
                    {t.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-bold text-foreground">{t.title}</h3>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground bg-secondary px-2 py-0.5 rounded-full">
                        {t.tag}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
                  </div>
                </div>
                <button
                  onClick={() => onNavigate('register')}
                  className="mt-5 text-xs font-semibold text-primary flex items-center gap-1 group-hover:gap-2 transition-all"
                >
                  Попробовать <Icon name="ArrowRight" size={12} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────── */}
      <section className="py-24 bg-card/40">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">Как это работает</span>
            <h2 className="text-4xl font-black mt-3">За три шага</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', icon: '✏️', title: 'Опиши задание', desc: 'Вставь текст задачи, тему работы или вопрос к экзамену — как обычный вопрос другу.' },
              { step: '02', icon: '⚡', title: 'AI обрабатывает', desc: 'Нейросеть анализирует запрос, находит источники и формирует структурированный ответ.' },
              { step: '03', icon: '✅', title: 'Получи результат', desc: 'Скачай готовую работу или изучи объяснение. Задай уточняющие вопросы в диалоге.' },
            ].map(step => (
              <div key={step.step} className="text-center">
                <div className="relative inline-flex mb-5">
                  <div className="w-16 h-16 rounded-2xl bg-secondary border border-border flex items-center justify-center text-3xl">
                    {step.icon}
                  </div>
                  <span className="absolute -top-2 -right-2 text-xs font-black text-primary bg-primary/10 border border-primary/20 w-6 h-6 rounded-full flex items-center justify-center">
                    {step.step.slice(1)}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ──────────────────────────────────── */}
      <section id="pricing" className="py-24 bg-background">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Тарифы</span>
            <h2 className="text-4xl md:text-5xl font-black mt-3 mb-4">Честные цены</h2>
            <p className="text-muted-foreground">Начни бесплатно, переходи на Pro когда нужно</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {plans.map(plan => (
              <div
                key={plan.id}
                className={`relative rounded-2xl border p-7 flex flex-col ${
                  plan.highlight
                    ? 'border-primary bg-primary/5 glow-primary'
                    : 'border-border bg-card'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-white text-xs font-bold px-4 py-1 rounded-full">
                      Популярный
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-lg font-bold">{plan.name}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">{plan.desc}</p>
                </div>

                <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-border">
                  <span className="text-4xl font-black">{plan.price === '0' ? 'Free' : `₽${plan.price}`}</span>
                  {plan.period && <span className="text-muted-foreground text-sm">{plan.period}</span>}
                </div>

                <ul className="space-y-3 flex-1 mb-7">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-center gap-2.5 text-sm">
                      <Icon name="Check" size={14} className="text-accent shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => onNavigate('register')}
                  className={`w-full py-3 rounded-xl text-sm font-bold transition-all ${
                    plan.highlight
                      ? 'bg-primary text-white hover:bg-primary/90 glow-primary'
                      : 'border border-border hover:bg-secondary'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS ──────────────────────────────────── */}
      <section className="py-24 bg-card/40">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">Отзывы</span>
            <h2 className="text-4xl font-black mt-3">Студенты уже в теме</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {reviews.map(r => (
              <div key={r.name} className="bg-card border border-border rounded-2xl p-6 card-glow">
                <div className="flex items-center gap-2 mb-1">
                  {[1,2,3,4,5].map(i => (
                    <Icon key={i} name="Star" size={12} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-foreground leading-relaxed mt-3 mb-5">«{r.text}»</p>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className={`w-9 h-9 rounded-full ${r.color} flex items-center justify-center text-white text-xs font-bold`}>
                    {r.avatar}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{r.name}</div>
                    <div className="text-xs text-muted-foreground">{r.uni}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────── */}
      <section id="faq" className="py-24 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">FAQ</span>
            <h2 className="text-4xl font-black mt-3">Частые вопросы</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((item, i) => (
              <div
                key={i}
                className={`border rounded-xl overflow-hidden transition-colors ${
                  openFaq === i ? 'border-primary/40 bg-primary/5' : 'border-border bg-card'
                }`}
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-4 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-semibold text-sm pr-4">{item.q}</span>
                  <Icon
                    name="ChevronDown"
                    size={16}
                    className={`text-muted-foreground shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed animate-fade-in">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 hero-mesh" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/15 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Готов учиться<br /><span className="text-gradient">умнее?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            Присоединяйся к 500 000 студентов. Первые запросы — бесплатно.
          </p>
          <button
            onClick={() => onNavigate('register')}
            className="bg-primary text-white font-bold px-10 py-4 rounded-xl text-lg hover:bg-primary/90 transition-all glow-primary"
          >
            Попробовать бесплатно
          </button>
          <p className="text-xs text-muted-foreground mt-4">Без карты · Без обязательств</p>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────── */}
      <footer className="border-t border-border bg-card py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-white text-xs font-black">S</span>
            </div>
            <span className="font-bold text-foreground">Стади</span>
          </div>
          <div className="flex gap-8">
            {['Возможности', 'Тарифы', 'FAQ', 'Политика'].map(l => (
              <span key={l} className="text-sm text-muted-foreground hover:text-foreground cursor-pointer transition-colors">{l}</span>
            ))}
          </div>
          <span className="text-xs text-muted-foreground">© 2025 Стади</span>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
