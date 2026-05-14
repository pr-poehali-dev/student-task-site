interface HomePageProps {
  onNavigate: (page: string) => void;
}

const stats = [
  { value: '12 400+', label: 'Студентов' },
  { value: '340', label: 'Задач в базе' },
  { value: '94%', label: 'Трудоустройство' },
  { value: '4.9', label: 'Средняя оценка' },
];

const features = [
  {
    icon: '📐',
    title: 'Структурированные курсы',
    desc: 'Программы, составленные практикующими специалистами с учётом актуальных требований рынка.',
  },
  {
    icon: '📊',
    title: 'Аналитика прогресса',
    desc: 'Детальная статистика решённых задач, времени обучения и динамики развития навыков.',
  },
  {
    icon: '💳',
    title: 'Гибкая подписка',
    desc: 'Выбирайте тариф по потребностям. Безопасная оплата, отмена в любой момент.',
  },
  {
    icon: '🏆',
    title: 'Рейтинг и достижения',
    desc: 'Соревнуйтесь с другими учениками, зарабатывайте значки и подтверждайте квалификацию.',
  },
];

const testimonials = [
  {
    name: 'Анна Светлова',
    role: 'Frontend-разработчик',
    text: 'За три месяца прошла путь от нуля до первого оффера. Система задач действительно работает.',
    avatar: 'АС',
  },
  {
    name: 'Михаил Дорохов',
    role: 'Data Analyst',
    text: 'Строгий подход к обучению. Никакой воды — только практика и разбор ошибок.',
    avatar: 'МД',
  },
  {
    name: 'Елена Чернова',
    role: 'Product Manager',
    text: 'Отслеживать собственный прогресс — это мотивирует. Видишь каждый шаг вперёд.',
    avatar: 'ЕЧ',
  },
];

const HomePage = ({ onNavigate }: HomePageProps) => {
  return (
    <div className="font-body">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center grid-bg pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white/95 to-secondary/40 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/8 border border-primary/15 px-3 py-1.5 mb-8">
              <span className="w-1.5 h-1.5 bg-accent rounded-full" />
              <span className="text-xs text-primary font-medium tracking-widest uppercase font-body">
                Профессиональное образование
              </span>
            </div>

            <h1 className="font-display text-5xl lg:text-6xl font-semibold text-primary leading-tight mb-6">
              Знания, которые<br />
              <span className="italic text-accent">меняют карьеру</span>
            </h1>

            <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-md">
              Образовательная платформа с практическими задачами, аналитикой прогресса
              и профессиональным сообществом.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => onNavigate('register')}
                className="bg-primary text-white px-8 py-3.5 text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                Начать бесплатно
              </button>
              <button
                onClick={() => onNavigate('tasks')}
                className="border border-border px-8 py-3.5 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
              >
                Смотреть задачи
              </button>
            </div>
          </div>

          {/* Stats card */}
          <div className="animate-scale-in hidden lg:block">
            <div className="bg-white border border-border shadow-sm p-8">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((s) => (
                  <div key={s.label} className="border-l-2 border-accent pl-4">
                    <div className="font-display text-3xl font-bold text-primary">{s.value}</div>
                    <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-border">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {['АС', 'МД', 'ЕЧ'].map((initials) => (
                      <div
                        key={initials}
                        className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs font-medium border-2 border-white"
                      >
                        {initials}
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <span className="text-foreground font-medium">247 человек</span> начали обучение на этой неделе
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground animate-bounce">
          <div className="w-px h-8 bg-border" />
          <span className="text-xs uppercase tracking-widest">Листайте</span>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-primary py-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display text-3xl font-bold text-white">{s.value}</div>
                <div className="text-primary-foreground/60 text-xs uppercase tracking-wider mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest text-accent font-medium">Платформа</span>
            <h2 className="font-display text-4xl font-semibold text-primary mt-3">
              Почему выбирают нас
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="group bg-white border border-border p-6 hover:border-primary/30 hover:shadow-md transition-all duration-300"
              >
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="font-display text-lg font-semibold text-primary mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest text-accent font-medium">Отзывы</span>
            <h2 className="font-display text-4xl font-semibold text-primary mt-3">
              Говорят наши студенты
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white border border-border p-6">
                <p className="text-foreground text-sm leading-relaxed mb-6 italic">«{t.text}»</p>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-9 h-9 bg-primary rounded-full flex items-center justify-center text-white text-xs font-medium">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-medium text-sm text-foreground">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl font-semibold text-white mb-4">
            Готовы начать?
          </h2>
          <p className="text-primary-foreground/70 mb-10">
            Зарегистрируйтесь бесплатно и получите доступ к первым 20 задачам без подписки.
          </p>
          <button
            onClick={() => onNavigate('register')}
            className="bg-accent text-white px-10 py-4 text-sm font-medium hover:bg-accent/90 transition-colors"
          >
            Создать аккаунт
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-display text-lg font-semibold text-white">Академия</span>
          <div className="flex gap-8">
            {['Главная', 'Задачи', 'Подписка', 'Профиль'].map((l) => (
              <span key={l} className="text-sm text-white/50 hover:text-white/80 cursor-pointer transition-colors">{l}</span>
            ))}
          </div>
          <span className="text-xs text-white/30">© 2025 Академия</span>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
