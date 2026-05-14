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
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-8 relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative w-full max-w-md animate-slide-up">
        {/* Logo */}
        <div className="text-center mb-8">
          <button onClick={() => onNavigate('home')} className="inline-flex items-center gap-2.5 mb-6">
            <div className="w-9 h-9 rounded-xl bg-primary glow-primary flex items-center justify-center">
              <span className="text-white font-black">S</span>
            </div>
            <span className="text-xl font-black">Стади</span>
          </button>

          <h1 className="text-3xl font-black">
            {mode === 'register' ? 'Создай аккаунт' : 'С возвращением'}
          </h1>
          <p className="text-muted-foreground text-sm mt-2">
            {mode === 'register'
              ? '5 запросов в день — навсегда бесплатно'
              : 'Войди в свой аккаунт'}
          </p>
        </div>

        {/* Card */}
        <div className="bg-card border border-border rounded-2xl p-8">
          {/* Toggle */}
          <div className="flex bg-secondary rounded-xl p-1 mb-7">
            {(['register', 'login'] as const).map(m => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${
                  mode === m ? 'bg-primary text-white glow-primary' : 'text-muted-foreground'
                }`}
              >
                {m === 'register' ? 'Регистрация' : 'Войти'}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === 'register' && (
              <div>
                <label className="block text-xs font-semibold text-muted-foreground mb-1.5 uppercase tracking-wider">
                  Имя
                </label>
                <input
                  type="text"
                  placeholder="Как тебя зовут?"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-muted-foreground mb-1.5 uppercase tracking-wider">
                Email
              </label>
              <input
                type="email"
                placeholder="student@university.ru"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-muted-foreground mb-1.5 uppercase tracking-wider">
                Пароль
              </label>
              <input
                type="password"
                placeholder="Не менее 8 символов"
                value={form.password}
                onChange={e => setForm({ ...form, password: e.target.value })}
                className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white font-bold py-3.5 rounded-xl text-sm hover:bg-primary/90 transition-all glow-primary flex items-center justify-center gap-2 mt-2"
            >
              {mode === 'register' ? 'Создать аккаунт' : 'Войти'}
              <Icon name="ArrowRight" size={16} />
            </button>
          </form>

          {mode === 'register' && (
            <p className="text-xs text-muted-foreground text-center mt-4 leading-relaxed">
              Регистрируясь, ты принимаешь{' '}
              <span className="text-primary cursor-pointer hover:underline">условия</span> и{' '}
              <span className="text-primary cursor-pointer hover:underline">политику конфиденциальности</span>
            </p>
          )}
        </div>

        {/* Perks */}
        <div className="mt-6 grid grid-cols-3 gap-3">
          {[
            { icon: 'Zap', text: 'Без карты' },
            { icon: 'Shield', text: 'Безопасно' },
            { icon: 'Gift', text: '5 запросов/день' },
          ].map(p => (
            <div key={p.text} className="bg-card border border-border rounded-xl p-3 text-center">
              <Icon name={p.icon as never} size={16} className="text-primary mx-auto mb-1" />
              <span className="text-xs text-muted-foreground">{p.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
