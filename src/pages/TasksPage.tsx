import { useState } from 'react';
import Icon from '@/components/ui/icon';

interface TasksPageProps {
  onNavigate: (page: string) => void;
}

const categories = ['Все', 'Алгоритмы', 'SQL', 'Python', 'Математика', 'Логика'];

const tasks = [
  { id: 1, title: 'Двоичный поиск', category: 'Алгоритмы', difficulty: 'Лёгкая', solved: true, time: '12 мин', points: 10 },
  { id: 2, title: 'Сортировка слиянием', category: 'Алгоритмы', difficulty: 'Средняя', solved: true, time: '28 мин', points: 25 },
  { id: 3, title: 'Динамическое программирование', category: 'Алгоритмы', difficulty: 'Сложная', solved: false, time: null, points: 50 },
  { id: 4, title: 'JOIN запросы', category: 'SQL', difficulty: 'Лёгкая', solved: true, time: '8 мин', points: 10 },
  { id: 5, title: 'Оконные функции', category: 'SQL', difficulty: 'Средняя', solved: false, time: null, points: 25 },
  { id: 6, title: 'Рекурсия в Python', category: 'Python', difficulty: 'Средняя', solved: true, time: '15 мин', points: 25 },
  { id: 7, title: 'Теория вероятностей', category: 'Математика', difficulty: 'Сложная', solved: false, time: null, points: 50 },
  { id: 8, title: 'Задача о мосте', category: 'Логика', difficulty: 'Средняя', solved: false, time: null, points: 25 },
  { id: 9, title: 'Графы: BFS/DFS', category: 'Алгоритмы', difficulty: 'Сложная', solved: false, time: null, points: 50 },
];

const difficultyConfig: Record<string, { label: string; color: string }> = {
  'Лёгкая': { label: 'Лёгкая', color: 'text-emerald-700 bg-emerald-50 border-emerald-200' },
  'Средняя': { label: 'Средняя', color: 'text-amber-700 bg-amber-50 border-amber-200' },
  'Сложная': { label: 'Сложная', color: 'text-red-700 bg-red-50 border-red-200' },
};

const TasksPage = ({ onNavigate }: TasksPageProps) => {
  const [activeCategory, setActiveCategory] = useState('Все');
  const [search, setSearch] = useState('');
  const [activeTask, setActiveTask] = useState<number | null>(null);

  const filtered = tasks.filter((t) => {
    const matchCat = activeCategory === 'Все' || t.category === activeCategory;
    const matchSearch = t.title.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const solvedCount = tasks.filter((t) => t.solved).length;
  const totalPoints = tasks.filter((t) => t.solved).reduce((sum, t) => sum + t.points, 0);

  return (
    <div className="min-h-screen bg-background pt-16 font-body">
      {/* Header */}
      <div className="bg-primary py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-accent font-medium">База знаний</span>
              <h1 className="font-display text-4xl font-semibold text-white mt-2">Задачи</h1>
              <p className="text-primary-foreground/60 mt-1">Практические задачи для развития навыков</p>
            </div>
            <div className="flex gap-4">
              <div className="bg-white/10 px-5 py-3 text-center">
                <div className="font-display text-2xl font-bold text-white">{solvedCount}/{tasks.length}</div>
                <div className="text-xs text-primary-foreground/60 uppercase tracking-wider mt-0.5">Решено</div>
              </div>
              <div className="bg-accent/20 border border-accent/30 px-5 py-3 text-center">
                <div className="font-display text-2xl font-bold text-white">{totalPoints}</div>
                <div className="text-xs text-primary-foreground/60 uppercase tracking-wider mt-0.5">Очков</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Progress bar */}
        <div className="mb-8 bg-white border border-border p-5">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-foreground">Общий прогресс</span>
            <span className="text-sm text-muted-foreground">{Math.round((solvedCount / tasks.length) * 100)}%</span>
          </div>
          <div className="h-2 bg-secondary rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-700"
              style={{ width: `${(solvedCount / tasks.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Icon name="Search" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Поиск задач..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border border-border pl-9 pr-4 py-2.5 text-sm focus:outline-none focus:border-primary bg-white"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-medium transition-colors border ${
                  activeCategory === cat
                    ? 'bg-primary text-white border-primary'
                    : 'bg-white text-muted-foreground border-border hover:border-primary/50 hover:text-foreground'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Task list */}
        <div className="space-y-2">
          {filtered.map((task) => (
            <div
              key={task.id}
              className={`bg-white border transition-all duration-200 cursor-pointer ${
                activeTask === task.id ? 'border-primary shadow-sm' : 'border-border hover:border-primary/40'
              }`}
              onClick={() => setActiveTask(activeTask === task.id ? null : task.id)}
            >
              <div className="flex items-center gap-4 p-4">
                {/* Status */}
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ${
                  task.solved ? 'bg-primary border-primary' : 'border-border'
                }`}>
                  {task.solved && <Icon name="Check" size={12} className="text-white" />}
                </div>

                {/* Title */}
                <div className="flex-1 min-w-0">
                  <span className={`font-medium text-sm ${task.solved ? 'text-muted-foreground' : 'text-foreground'}`}>
                    {task.title}
                  </span>
                </div>

                {/* Category */}
                <span className="hidden sm:block text-xs text-muted-foreground bg-secondary px-2 py-1">
                  {task.category}
                </span>

                {/* Difficulty */}
                <span className={`text-xs border px-2 py-1 font-medium ${difficultyConfig[task.difficulty].color}`}>
                  {task.difficulty}
                </span>

                {/* Points */}
                <span className="text-xs font-medium text-accent hidden md:block">+{task.points} очков</span>

                {/* Time */}
                {task.solved && task.time && (
                  <span className="text-xs text-muted-foreground hidden lg:flex items-center gap-1">
                    <Icon name="Clock" size={12} />
                    {task.time}
                  </span>
                )}

                <Icon
                  name="ChevronDown"
                  size={16}
                  className={`text-muted-foreground transition-transform ${activeTask === task.id ? 'rotate-180' : ''}`}
                />
              </div>

              {/* Expanded */}
              {activeTask === task.id && (
                <div className="border-t border-border px-4 py-5 animate-fade-in">
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    Практическая задача по теме «{task.category}». Оцените свой уровень, решите задачу
                    и получите подробный разбор решения с объяснением алгоритма.
                  </p>
                  <div className="flex gap-3">
                    <button className="bg-primary text-white px-5 py-2 text-sm font-medium hover:bg-primary/90 transition-colors">
                      {task.solved ? 'Решить снова' : 'Решить задачу'}
                    </button>
                    {task.solved && (
                      <button className="border border-border px-5 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors">
                        Посмотреть решение
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-muted-foreground">
            <Icon name="Search" size={32} className="mx-auto mb-3 opacity-30" />
            <p>Задачи не найдены</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TasksPage;
