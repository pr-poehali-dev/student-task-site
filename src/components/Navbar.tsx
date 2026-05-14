import { useState } from 'react';
import Icon from '@/components/ui/icon';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Navbar = ({ currentPage, onNavigate }: NavbarProps) => {
  const [open, setOpen] = useState(false);

  const links = [
    { id: 'features', label: 'Возможности' },
    { id: 'pricing', label: 'Тарифы' },
    { id: 'faq', label: 'FAQ' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <button onClick={() => onNavigate('home')} className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center glow-primary">
            <span className="text-white text-sm font-black">S</span>
          </div>
          <span className="text-lg font-bold text-foreground">Стади</span>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <button
              key={l.id}
              onClick={() => onNavigate(l.id)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => onNavigate('login')}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors px-3 py-2"
          >
            Войти
          </button>
          <button
            onClick={() => onNavigate('register')}
            className="text-sm font-semibold bg-primary text-white px-4 py-2 rounded-xl hover:bg-primary/90 transition-all glow-primary"
          >
            Начать бесплатно
          </button>
        </div>

        <button className="md:hidden p-2 text-muted-foreground" onClick={() => setOpen(!open)}>
          <Icon name={open ? 'X' : 'Menu'} size={20} />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-card border-t border-border px-6 py-5 flex flex-col gap-4 animate-fade-in">
          {links.map(l => (
            <button
              key={l.id}
              onClick={() => { onNavigate(l.id); setOpen(false); }}
              className="text-sm text-muted-foreground text-left"
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => { onNavigate('register'); setOpen(false); }}
            className="bg-primary text-white text-sm font-semibold py-3 rounded-xl mt-1"
          >
            Начать бесплатно
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
