import { Button } from '@/components/ui/button';

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
      className="relative min-h-screen flex items-center justify-center text-white pt-20"
      style={{
        backgroundImage: 'linear-gradient(rgba(10, 36, 99, 0.85), rgba(10, 36, 99, 0.9)), url(https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-4 text-center animate-fade-in">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
          Официальное представительство<br />Nelden Industry в России
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
          Итальянское оборудование для розлива напитков, сервисное обслуживание и поставка оригинальных запчастей для линий URANO, GIOVE и ENGINEERING
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white font-semibold uppercase tracking-wide"
            onClick={() => scrollToSection('services')}
          >
            Наши услуги
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold uppercase tracking-wide"
            onClick={() => scrollToSection('contact')}
          >
            Заказать звонок
          </Button>
        </div>
      </div>
    </section>
  );
}
