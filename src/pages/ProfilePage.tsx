import Icon from '@/components/ui/icon';

interface ProfilePageProps {
  onNavigate: (page: string) => void;
}

const weekData = [3, 1, 4, 2, 5, 3, 2];
const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

const categoryProgress = [
  { name: 'Алгоритмы', solved: 2, total: 3, color: 'bg-primary' },
  { name: 'SQL', solved: 1, total: 2, color: 'bg-primary' },
  { name: 'Python', solved: 1, total: 1, color: 'bg-accent' },
  { name: 'Математика', solved: 0, total: 1, color: 'bg-primary' },
  { name: 'Логика', solved: 0, total: 1, color: 'bg-primary' },
];

const achievements = [
  { icon: '🎯', title: 'Первая задача', desc: 'Решили первую задачу', earned: true },
  { icon: '🔥', title: 'Серия 3 дня', desc: '3 дня подряд', earned: true },
  { icon: '⚡', title: 'Скорострел', desc: 'Решили за < 5 минут', earned: true },
  { icon: '🏆', title: 'Мастер SQL', desc: 'Все SQL задачи', earned: false },
  { icon: '💎', title: 'Алгоритмист', desc: 'Все алгоритмы', earned: false },
  { icon: '🌟', title: 'Топ-10', desc: 'Войти в рейтинг', earned: false },
];

const ProfilePage = ({ onNavigate }: ProfilePageProps) => {
  const maxVal = Math.max(...weekData);

  return (
    <div className="min-h-screen bg-background pt-16 font-body">
      {/* Header */}
      <div className="bg-primary py-12 px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
            <span className="font-display text-2xl font-bold text-white">ИИ</span>
          </div>
          <div className="flex-1">
            <h1 className="font-display text-3xl font-semibold text-white">Иван Иванов</h1>
            <div className="flex items-center gap-4 mt-1">
              <span className="text-primary-foreground/60 text-sm">ivan@example.com</span>
              <span className="bg-accent text-white text-xs px-2 py-0.5 font-medium uppercase tracking-wider">
                Профессионал
              </span>
            </div>
          </div>
          <button className="border border-white/30 text-white text-sm px-5 py-2 hover:bg-white/10 transition-colors flex items-center gap-2">
            <Icon name="Settings" size={14} />
            Настройки
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-8">
        {/* Summary stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { icon: 'CheckCircle', label: 'Решено задач', value: '4', sub: 'из 9' },
            { icon: 'Zap', label: 'Очков набрано', value: '70', sub: 'баллов' },
            { icon: 'Flame', label: 'Серия дней', value: '3', sub: 'подряд' },
            { icon: 'Trophy', label: 'Место в рейтинге', value: '247', sub: 'из 12 400' },
          ].map((s) => (
            <div key={s.label} className="bg-white border border-border p-5">
              <Icon name={s.icon as never} size={18} className="text-accent mb-3" />
              <div className="font-display text-3xl font-bold text-primary">{s.value}</div>
              <div className="text-xs text-muted-foreground mt-0.5">{s.sub}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Activity chart */}
          <div className="lg:col-span-2 bg-white border border-border p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-display text-lg font-semibold text-primary">Активность на неделе</h3>
              <span className="text-xs text-muted-foreground">задач в день</span>
            </div>
            <div className="flex items-end gap-3 h-28">
              {weekData.map((val, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                  <span className="text-xs text-muted-foreground">{val}</span>
                  <div
                    className="w-full bg-primary/15 rounded-sm relative overflow-hidden transition-all"
                    style={{ height: `${(val / maxVal) * 80}px` }}
                  >
                    <div
                      className="absolute bottom-0 left-0 right-0 bg-primary"
                      style={{ height: `${(val / maxVal) * 100}%` }}
                    />
                  </div>
                  <span className="text-xs text-muted-foreground">{weekDays[idx]}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Subscription */}
          <div className="bg-primary p-6 flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-widest text-accent font-medium">Подписка</span>
              <h3 className="font-display text-2xl font-semibold text-white mt-2">Профессионал</h3>
              <p className="text-primary-foreground/60 text-sm mt-1">Активна до 15 июня 2025</p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/20">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-primary-foreground/60">Следующее списание</span>
                <span className="text-sm font-medium text-white">₽1 490</span>
              </div>
              <button
                onClick={() => onNavigate('subscription')}
                className="w-full border border-white/30 text-white text-sm py-2.5 hover:bg-white/10 transition-colors"
              >
                Управление подпиской
              </button>
            </div>
          </div>
        </div>

        {/* Category progress */}
        <div className="mt-6 bg-white border border-border p-6">
          <h3 className="font-display text-lg font-semibold text-primary mb-5">Прогресс по категориям</h3>
          <div className="space-y-4">
            {categoryProgress.map((c) => (
              <div key={c.name}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-sm font-medium text-foreground">{c.name}</span>
                  <span className="text-xs text-muted-foreground">{c.solved} / {c.total}</span>
                </div>
                <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                  <div
                    className={`h-full ${c.color} transition-all duration-700`}
                    style={{ width: `${(c.solved / c.total) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mt-6 bg-white border border-border p-6">
          <h3 className="font-display text-lg font-semibold text-primary mb-5">Достижения</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {achievements.map((a) => (
              <div
                key={a.title}
                className={`flex flex-col items-center text-center p-4 border transition-all ${
                  a.earned
                    ? 'border-accent/30 bg-accent/5'
                    : 'border-border bg-secondary/30 opacity-50'
                }`}
              >
                <span className="text-2xl mb-2">{a.icon}</span>
                <div className="text-xs font-medium text-foreground">{a.title}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{a.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
