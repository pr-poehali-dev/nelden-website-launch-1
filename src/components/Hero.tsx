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
      className="relative min-h-screen flex items-center justify-center text-white pt-20 overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(rgba(56, 138, 136, 0.85), rgba(56, 138, 136, 0.9)), url(https://cdn.poehali.dev/projects/7974b9bd-0297-4c1b-8ad9-fe09255dd233/files/9b47bd33-6cda-40a8-bfdc-333ab878f8dd.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/30"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-5xl mx-auto space-y-8 animate-fade-in">
          <div className="inline-block mb-4 animate-fade-in">
            <div className="px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border-2 border-white/30 hover:bg-white/20 hover:scale-105 transition-all duration-300">
              <p className="text-sm font-semibold tracking-wider uppercase flex items-center gap-2 justify-center">
                <Icon name="MapPin" size={16} />
                Made in Italy • Качество с 1990 года
              </p>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-8 text-white leading-tight">
            Официальное представительство<br />
            <span className="text-white/90">NELDEN INDUSTRY в России</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Итальянское оборудование для розлива напитков, сервисное обслуживание и поставка оригинальных запчастей для линий URANO, GIOVE и ENGINEERING
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white font-semibold uppercase tracking-wide px-8 py-7 text-base shadow-2xl hover:shadow-accent/50 transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection('services')}
            >
              Наши услуги
              <Icon name="ChevronRight" size={20} className="ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold uppercase tracking-wide px-8 py-7 text-base backdrop-blur-sm bg-white/10 hover:scale-105 transition-all duration-300"
              onClick={() => scrollToSection('contact')}
            >
              <Icon name="Mail" size={20} className="mr-2" />
              Оставить заявку
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mt-16 pt-12 border-t border-white/20">
            <div className="text-center group hover:scale-110 transition-transform duration-300 animate-fade-in">
              <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <Icon name="Users" size={32} className="text-white/90" />
              </div>
              <div className="text-4xl font-bold mb-2">50+ в РФ </div>
              <div className="text-sm uppercase tracking-wider opacity-80">Клиентов</div>
            </div>
            <div className="text-center group hover:scale-110 transition-transform duration-300 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <Icon name="Award" size={32} className="text-white/90" />
              </div>
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-sm uppercase tracking-wider opacity-80">Лет опыта</div>
            </div>
            <div className="text-center group hover:scale-110 transition-transform duration-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <Icon name="Headphones" size={32} className="text-white/90" />
              </div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-sm uppercase tracking-wider opacity-80">Поддержка</div>
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