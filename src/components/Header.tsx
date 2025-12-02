import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-primary">
              NELDEN<span className="text-accent">RUSSIA</span>
            </div>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} className="text-primary" />
          </button>

          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('hero')} className="font-semibold text-sm uppercase text-foreground hover:text-accent transition-colors">
              Главная
            </button>
            <button onClick={() => scrollToSection('about')} className="font-semibold text-sm uppercase text-foreground hover:text-accent transition-colors">
              О компании
            </button>
            <button onClick={() => scrollToSection('services')} className="font-semibold text-sm uppercase text-foreground hover:text-accent transition-colors">
              Сервис
            </button>
            <button onClick={() => scrollToSection('equipment')} className="font-semibold text-sm uppercase text-foreground hover:text-accent transition-colors">
              Оборудование
            </button>
            <button onClick={() => scrollToSection('contact')} className="font-semibold text-sm uppercase text-foreground hover:text-accent transition-colors">
              Контакты
            </button>
          </nav>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('hero')} className="font-semibold text-sm uppercase text-foreground hover:text-accent transition-colors text-left">
                Главная
              </button>
              <button onClick={() => scrollToSection('about')} className="font-semibold text-sm uppercase text-foreground hover:text-accent transition-colors text-left">
                О компании
              </button>
              <button onClick={() => scrollToSection('services')} className="font-semibold text-sm uppercase text-foreground hover:text-accent transition-colors text-left">
                Сервис
              </button>
              <button onClick={() => scrollToSection('equipment')} className="font-semibold text-sm uppercase text-foreground hover:text-accent transition-colors text-left">
                Оборудование
              </button>
              <button onClick={() => scrollToSection('contact')} className="font-semibold text-sm uppercase text-foreground hover:text-accent transition-colors text-left">
                Контакты
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
