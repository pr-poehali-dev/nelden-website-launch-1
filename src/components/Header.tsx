import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-2xl border-b-2 border-accent/10' 
        : 'bg-white shadow-md'
    }`}>
      <div className="container mx-auto px-4">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          scrolled ? 'h-16' : 'h-20'
        }`}>
          <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => scrollToSection('hero')}>
            <img 
              src="https://cdn.poehali.dev/files/ad869417-b707-41c5-a2a1-208a80d75e7a.png" 
              alt="Nelden Industry" 
              className={`transition-all duration-300 group-hover:scale-110 ${
                scrolled ? 'h-8' : 'h-12'
              }`}
            />
            <div className="flex flex-col">
              <span className="text-xs text-primary/60 font-semibold uppercase tracking-wider">Official</span>
              <span className="text-sm font-bold text-primary">RUSSIA</span>
            </div>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} className="text-primary" />
          </button>

          <nav className="hidden md:flex items-center space-x-1">
            <button onClick={() => scrollToSection('hero')} className="relative px-4 py-2 font-semibold text-sm uppercase text-foreground hover:text-accent transition-all duration-300 group">
              <span className="relative z-10">Главная</span>
              <span className="absolute inset-0 bg-accent/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
            </button>
            <button onClick={() => scrollToSection('about')} className="relative px-4 py-2 font-semibold text-sm uppercase text-foreground hover:text-accent transition-all duration-300 group">
              <span className="relative z-10">О компании</span>
              <span className="absolute inset-0 bg-accent/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
            </button>
            <button onClick={() => scrollToSection('services')} className="relative px-4 py-2 font-semibold text-sm uppercase text-foreground hover:text-accent transition-all duration-300 group">
              <span className="relative z-10">Сервис</span>
              <span className="absolute inset-0 bg-accent/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
            </button>
            <button onClick={() => scrollToSection('equipment')} className="relative px-4 py-2 font-semibold text-sm uppercase text-foreground hover:text-accent transition-all duration-300 group">
              <span className="relative z-10">Оборудование</span>
              <span className="absolute inset-0 bg-accent/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
            </button>
            <Button 
              onClick={() => scrollToSection('contact')} 
              className="ml-4 bg-accent hover:bg-accent/90 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Icon name="Phone" size={16} className="mr-2" />
              Контакты
            </Button>
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