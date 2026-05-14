import { useState } from 'react';
import Icon from '@/components/ui/icon';

interface RegisterPageProps {
  onNavigate: (page: string) => void;
}

const RegisterPage = ({ onNavigate }: RegisterPageProps) => {
  const [mode, setMode] = useState<'register' | 'login'>('register');
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNavigate('tasks');
  };

  return (
    <div className="min-h-screen bg-background flex pt-16">
      {/* Left panel */}
      <div className="hidden lg:flex flex-col justify-between w-1/2 bg-primary p-12">
        <div>
          <button onClick={() => onNavigate('home')} className="font-display text-2xl font-semibold text-white">
            Академия
          </button>
        </div>
        <div>
          <blockquote className="font-display text-3xl font-medium text-white leading-relaxed mb-6">
            «Обучение — это инвестиция с гарантированной доходностью»
          </blockquote>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white text-sm font-medium">
              ИП
            </div>
            <div>
              <div className="text-white text-sm font-medium">Игорь Петровский</div>
              <div className="text-white/50 text-xs">Основатель платформы</div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {['12 400 студентов', '340 задач', '94% трудоустройство'].map((s) => (
            <div key={s} className="bg-white/10 px-4 py-3">
              <div className="text-white text-sm font-medium">{s}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Right panel */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md animate-fade-in">
          {/* Mode toggle */}
          <div className="flex border border-border mb-8">
            <button
              onClick={() => setMode('register')}
              className={`flex-1 py-2.5 text-sm font-medium transition-colors ${
                mode === 'register'
                  ? 'bg-primary text-white'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Регистрация
            </button>
            <button
              onClick={() => setMode('login')}
              className={`flex-1 py-2.5 text-sm font-medium transition-colors ${
                mode === 'login'
                  ? 'bg-primary text-white'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Войти
            </button>
          </div>

          <div className="mb-8">
            <h1 className="font-display text-3xl font-semibold text-primary">
              {mode === 'register' ? 'Создать аккаунт' : 'Добро пожаловать'}
            </h1>
            <p className="text-muted-foreground text-sm mt-2">
              {mode === 'register'
                ? 'Заполните данные для регистрации'
                : 'Войдите в свой аккаунт'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === 'register' && (
              <div>
                <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2 font-medium">
                  Полное имя
                </label>
                <input
                  type="text"
                  placeholder="Иван Иванов"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary bg-white transition-colors"
                />
              </div>
            )}

            <div>
              <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2 font-medium">
                Email
              </label>
              <input
                type="email"
                placeholder="ivan@example.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary bg-white transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2 font-medium">
                Пароль
              </label>
              <input
                type="password"
                placeholder="Не менее 8 символов"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className="w-full border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary bg-white transition-colors"
              />
            </div>

            {mode === 'register' && (
              <div className="flex items-start gap-3 pt-1">
                <input type="checkbox" id="agree" className="mt-0.5 accent-primary" />
                <label htmlFor="agree" className="text-xs text-muted-foreground leading-relaxed">
                  Я принимаю{' '}
                  <span className="text-primary underline cursor-pointer">условия использования</span>{' '}
                  и{' '}
                  <span className="text-primary underline cursor-pointer">политику конфиденциальности</span>
                </label>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-primary text-white py-3.5 text-sm font-medium hover:bg-primary/90 transition-colors mt-2 flex items-center justify-center gap-2"
            >
              {mode === 'register' ? 'Создать аккаунт' : 'Войти'}
              <Icon name="ArrowRight" size={16} />
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-border">
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <Icon name="Shield" size={14} />
              <span>Безопасная передача данных</span>
              <Icon name="Lock" size={14} />
              <span>SSL шифрование</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
