import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-white pt-16 md:pt-20 overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(rgba(56, 138, 136, 0.85), rgba(56, 138, 136, 0.9)), url(https://cdn.poehali.dev/projects/7974b9bd-0297-4c1b-8ad9-fe09255dd233/files/9b47bd33-6cda-40a8-bfdc-333ab878f8dd.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/30"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-5xl mx-auto space-y-6 md:space-y-8 animate-fade-in">
          <div className="inline-block mb-4 animate-fade-in">
            <div className="px-4 md:px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border-2 border-white/30 hover:bg-white/20 hover:scale-105 transition-all duration-300">
              <p className="text-xs md:text-sm font-semibold tracking-wider uppercase flex items-center gap-2 justify-center">
                <Icon name="MapPin" size={14} className="md:w-4 md:h-4" />
                Made in Italy • 1990
              </p>
            </div>
          </div>
          
          <h1 className="text-3xl md:text-6xl font-bold mb-6 md:mb-8 text-white leading-tight px-2">
            Официальное представительство<br />
            <span className="text-white/90">NELDEN INDUSTRY в России</span>
          </h1>
          
          <p className="text-base md:text-2xl mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed font-light px-4">
            Итальянское оборудование для розлива напитков, сервисное обслуживание и поставка оригинальных запчастей для линий URANO, GIOVE и ENGINEERING
          </p>
          
          <div className="flex flex-col gap-4 md:gap-6 justify-center items-stretch md:items-center px-4 md:flex-row">
            <Button
              size="lg"
              className="w-full md:w-auto bg-accent hover:bg-accent/90 text-white font-semibold uppercase tracking-wide px-6 md:px-8 py-6 md:py-7 text-sm md:text-base shadow-2xl hover:shadow-accent/50 transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection('services')}
            >
              Наши услуги
              <Icon name="ChevronRight" size={18} className="ml-2 md:w-5 md:h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full md:w-auto border-2 border-white text-white hover:bg-white hover:text-primary font-semibold uppercase tracking-wide px-6 md:px-8 py-6 md:py-7 text-sm md:text-base backdrop-blur-sm bg-white/10 hover:scale-105 transition-all duration-300"
              onClick={() => scrollToSection('contact')}
            >
              <Icon name="Mail" size={18} className="mr-2 md:w-5 md:h-5" />
              Оставить заявку
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto mt-12 md:mt-16 pt-8 md:pt-12 border-t border-white/20 px-2">
            <div className="text-center group hover:scale-110 transition-transform duration-300 animate-fade-in">
              <div className="w-12 h-12 md:w-20 md:h-20 mx-auto mb-2 md:mb-3 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <Icon name="Users" size={20} className="md:w-8 md:h-8 text-white/90" />
              </div>
              <div className="text-xl md:text-4xl font-bold mb-1 md:mb-2">50+</div>
              <div className="text-[10px] md:text-sm uppercase tracking-wider opacity-80">Клиентов в РФ</div>
            </div>
            <div className="text-center group hover:scale-110 transition-transform duration-300 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="w-12 h-12 md:w-20 md:h-20 mx-auto mb-2 md:mb-3 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <Icon name="Award" size={20} className="md:w-8 md:h-8 text-white/90" />
              </div>
              <div className="text-xl md:text-4xl font-bold mb-1 md:mb-2">10+</div>
              <div className="text-[10px] md:text-sm uppercase tracking-wider opacity-80">Лет опыта</div>
            </div>
            <div className="text-center group hover:scale-110 transition-transform duration-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-12 h-12 md:w-20 md:h-20 mx-auto mb-2 md:mb-3 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <Icon name="Headphones" size={20} className="md:w-8 md:h-8 text-white/90" />
              </div>
              <div className="text-xl md:text-4xl font-bold mb-1 md:mb-2">24/7</div>
              <div className="text-[10px] md:text-sm uppercase tracking-wider opacity-80">Поддержка</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} className="text-white/60" />
      </div>
    </section>
  );
}