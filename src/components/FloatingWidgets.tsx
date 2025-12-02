import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

export default function FloatingWidgets() {
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

        <Button
          onClick={scrollToContact}
          size="icon"
          className="h-16 w-16 rounded-full bg-primary hover:bg-primary/90 text-white shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-110 animate-pulse-slow"
        >
          <Icon name="Mail" size={28} />
        </Button>
      </div>

      <div className="fixed bottom-8 left-8 z-40 animate-fade-in hidden sm:block">
        <div className="bg-white rounded-2xl shadow-2xl p-4 border-2 border-accent/20 flex items-center gap-3 group hover:scale-105 transition-all duration-300">
          <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center animate-pulse-slow">
            <Icon name="Clock" size={24} className="text-accent" />
          </div>
          <div>
            <div className="text-xs text-gray-500 font-semibold">Прием заявок</div>
            <div className="font-bold text-primary">24/7</div>
          </div>
        </div>
      </div>
    </>
  );
}