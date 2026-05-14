import { useState } from 'react';
import Icon from '@/components/ui/icon';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Navbar = ({ currentPage, onNavigate }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { id: 'home', label: 'Главная' },
    { id: 'tasks', label: 'Задачи' },
    { id: 'subscription', label: 'Подписка' },
    { id: 'profile', label: 'Профиль' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2.5 group"
        >
          <div className="w-8 h-8 bg-primary flex items-center justify-center">
            <span className="text-white text-xs font-display font-bold tracking-widest">А</span>
          </div>
          <span className="font-display text-xl font-semibold text-primary tracking-wide">
            Академия
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className={`nav-link font-body text-sm font-medium transition-colors ${
                currentPage === link.id
                  ? 'text-primary active'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => onNavigate('register')}
            className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Войти
          </button>
          <button
            onClick={() => onNavigate('register')}
            className="font-body text-sm bg-primary text-primary-foreground px-4 py-2 hover:bg-primary/90 transition-colors"
          >
            Начать бесплатно
          </button>
        </div>

        {/* Mobile menu */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? 'X' : 'Menu'} size={20} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-border animate-fade-in">
          <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-4">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => { onNavigate(link.id); setMenuOpen(false); }}
                className={`text-left font-body text-sm font-medium py-1 ${
                  currentPage === link.id ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => { onNavigate('register'); setMenuOpen(false); }}
              className="font-body text-sm bg-primary text-white px-4 py-2 text-center mt-2"
            >
              Начать бесплатно
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
