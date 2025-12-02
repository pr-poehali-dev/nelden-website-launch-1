import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

export default function FloatingWidgets() {
  const [showPhone, setShowPhone] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="fixed bottom-8 right-8 z-40 flex flex-col gap-4">
        <Button
          onClick={scrollToTop}
          size="icon"
          className="h-14 w-14 rounded-full bg-accent hover:bg-accent/90 text-white shadow-2xl hover:shadow-accent/50 transition-all duration-300 hover:scale-110 animate-fade-in"
        >
          <Icon name="ArrowUp" size={24} />
        </Button>

        <div className="relative">
          <Button
            onClick={() => setShowPhone(!showPhone)}
            size="icon"
            className="h-16 w-16 rounded-full bg-primary hover:bg-primary/90 text-white shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-110 animate-pulse-slow"
          >
            <Icon name="Phone" size={28} />
          </Button>
          
          {showPhone && (
            <div className="absolute bottom-full right-0 mb-4 animate-slide-in-right">
              <div className="bg-white rounded-2xl shadow-2xl p-6 border-2 border-accent/20 min-w-[280px]">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-primary text-lg">Позвоните нам</h4>
                  <button onClick={() => setShowPhone(false)}>
                    <Icon name="X" size={20} className="text-gray-400 hover:text-gray-600" />
                  </button>
                </div>
                <div className="space-y-3">
                  <a 
                    href="tel:+74951234567" 
                    className="flex items-center gap-3 p-3 rounded-lg bg-accent/5 hover:bg-accent/10 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                      <Icon name="Phone" size={20} className="text-accent" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Офис</div>
                      <div className="font-bold text-primary">+7 (495) 123-45-67</div>
                    </div>
                  </a>
                  
                  <button 
                    onClick={scrollToContact}
                    className="w-full flex items-center justify-center gap-2 p-3 rounded-lg bg-accent hover:bg-accent/90 text-white font-semibold transition-all duration-300 hover:scale-105"
                  >
                    <Icon name="Mail" size={20} />
                    Написать нам
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        <a
          href="https://wa.me/74951234567"
          target="_blank"
          rel="noopener noreferrer"
          className="h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-2xl hover:shadow-[#25D366]/50 transition-all duration-300 hover:scale-110 flex items-center justify-center"
        >
          <Icon name="MessageCircle" size={24} />
        </a>
      </div>

      <div className="fixed bottom-8 left-8 z-40 animate-fade-in hidden sm:block">
        <div className="bg-white rounded-2xl shadow-2xl p-4 border-2 border-accent/20 flex items-center gap-3 group hover:scale-105 transition-all duration-300">
          <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center animate-pulse-slow">
            <Icon name="Clock" size={24} className="text-accent" />
          </div>
          <div>
            <div className="text-xs text-gray-500 font-semibold">Работаем</div>
            <div className="font-bold text-primary">Пн-Пт: 9:00 - 18:00</div>
          </div>
        </div>
      </div>
    </>
  );
}