import Icon from '@/components/ui/icon';

interface ProfilePageProps {
  onNavigate: (page: string) => void;
}

const weekData = [2, 5, 3, 7, 4, 6, 3];
const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

const recentActivity = [
  { icon: '📝', title: 'Курсовая по экономике', time: '2 часа назад', points: '+15' },
  { icon: '🧮', title: 'Задача по физике', time: 'вчера', points: '+10' },
  { icon: '🎓', title: 'Подготовка к экзамену', time: '2 дня назад', points: '+20' },
  { icon: '🎨', title: 'Презентация по истории', time: '3 дня назад', points: '+12' },
];

const achievements = [
  { icon: '🚀', title: 'Первый запрос', earned: true },
  { icon: '🔥', title: '7 дней подряд', earned: true },
  { icon: '🧠', title: '50 задач', earned: true },
  { icon: '💎', title: '100 задач', earned: false },
  { icon: '🏆', title: 'Топ-100', earned: false },
  { icon: '⭐', title: 'Мастер AI', earned: false },
];

const ProfilePage = ({ onNavigate }: ProfilePageProps) => {
  const maxVal = Math.max(...weekData);

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Header */}
      <div className="relative bg-card/40 border-b border-border py-10 px-6 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-primary/8 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-6 relative">
          <div className="relative">
            <div className="w-16 h-16 rounded-2xl bg-primary glow-primary flex items-center justify-center">
              <span className="text-white text-xl font-black">АК</span>
            </div>
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-accent rounded-full border-2 border-background flex items-center justify-center">
              <Icon name="Check" size={9} className="text-accent-foreground" />
            </div>
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-black">Алина Козлова</h1>
            <p className="text-muted-foreground text-sm mt-0.5">alina@student.ru · МГУ, 3 курс</p>
            <div className="flex items-center gap-3 mt-2">
              <span className="bg-primary/10 border border-primary/20 text-primary text-xs font-bold px-3 py-1 rounded-full">
                ⚡ Про
              </span>
              <span className="text-xs text-muted-foreground">подписка до 15 июня 2025</span>
            </div>
          </div>
          <button className="border border-border rounded-xl px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors flex items-center gap-2">
            <Icon name="Settings" size={14} />
            Настройки
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-8">
        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {[
            { icon: 'MessageSquare', label: 'Всего запросов', value: '87', color: 'text-primary' },
            { icon: 'Zap', label: 'Очков заработано', value: '430', color: 'text-accent' },
            { icon: 'Flame', label: 'Серия дней', value: '7', color: 'text-amber-400' },
            { icon: 'Trophy', label: 'Место в рейтинге', value: '#312', color: 'text-pink-400' },
          ].map(s => (
            <div key={s.label} className="bg-card border border-border rounded-2xl p-5">
              <Icon name={s.icon as never} size={20} className={`${s.color} mb-3`} />
              <div className="text-3xl font-black">{s.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Activity chart + Recent */}
          <div className="lg:col-span-2 space-y-5">
            {/* Bar chart */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold">Активность за неделю</h3>
                <span className="text-xs text-muted-foreground">запросов</span>
              </div>
              <div className="flex items-end gap-2 h-24">
                {weekData.map((val, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
                    <span className="text-[10px] text-muted-foreground">{val}</span>
                    <div
                      className="w-full rounded-lg bg-primary/20 overflow-hidden relative"
                      style={{ height: `${(val / maxVal) * 72}px` }}
                    >
                      <div
                        className="absolute bottom-0 left-0 right-0 bg-primary rounded-lg"
                        style={{ height: `${(val / maxVal) * 100}%` }}
                      />
                    </div>
                    <span className="text-[10px] text-muted-foreground">{weekDays[i]}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent activity */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-bold mb-4">Последние запросы</h3>
              <div className="space-y-3">
                {recentActivity.map((a, i) => (
                  <div key={i} className="flex items-center gap-3 py-2 border-b border-border last:border-0">
                    <div className="w-9 h-9 rounded-xl bg-secondary flex items-center justify-center text-lg shrink-0">
                      {a.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{a.title}</p>
                      <p className="text-xs text-muted-foreground">{a.time}</p>
                    </div>
                    <span className="text-xs font-bold text-accent shrink-0">{a.points}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-5">
            {/* Subscription card */}
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Zap" size={16} className="text-primary" />
                <span className="font-bold text-sm">Тариф Про</span>
              </div>
              <div className="space-y-2 mb-5">
                {['Безлимитные запросы', 'GPT-4 модель', 'Скачивание .docx'].map(f => (
                  <div key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Icon name="Check" size={12} className="text-accent" />
                    {f}
                  </div>
                ))}
              </div>
              <div className="border-t border-border/50 pt-4">
                <div className="flex justify-between text-xs mb-3">
                  <span className="text-muted-foreground">Следующее списание</span>
                  <span className="font-semibold">₽299</span>
                </div>
                <button
                  onClick={() => onNavigate('pricing')}
                  className="w-full border border-border rounded-xl py-2 text-xs font-semibold text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors"
                >
                  Управление подпиской
                </button>
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-bold text-sm mb-4">Достижения</h3>
              <div className="grid grid-cols-3 gap-2">
                {achievements.map(a => (
                  <div
                    key={a.title}
                    className={`flex flex-col items-center text-center p-3 rounded-xl transition-all ${
                      a.earned
                        ? 'bg-primary/10 border border-primary/20'
                        : 'bg-secondary/50 border border-border opacity-40'
                    }`}
                  >
                    <span className="text-xl mb-1">{a.icon}</span>
                    <span className="text-[10px] font-semibold leading-tight">{a.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Referral */}
            <div className="bg-accent/5 border border-accent/20 rounded-2xl p-5">
              <div className="text-xl mb-2">🎁</div>
              <h4 className="font-bold text-sm mb-1">Пригласи друга</h4>
              <p className="text-xs text-muted-foreground mb-3">Получи 7 дней Про за каждого приглашённого</p>
              <button className="w-full border border-accent/30 text-accent text-xs font-bold py-2 rounded-xl hover:bg-accent/10 transition-colors">
                Скопировать ссылку
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
