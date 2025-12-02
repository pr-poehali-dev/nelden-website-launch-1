import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Services() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      title: 'Техническое обслуживание',
      description: 'Плановое и внеплановое ТО оборудования, диагностика, регулировка и настройка',
      image: 'https://cdn.poehali.dev/projects/7974b9bd-0297-4c1b-8ad9-fe09255dd233/files/08724b16-f90f-4814-908f-ebaf7ee67972.jpg',
      icon: 'Settings',
      features: ['Диагностика', 'Регулировка', 'Профилактика'],
    },
    {
      title: 'Ремонт оборудования',
      description: 'Качественный ремонт любой сложности: от замены деталей до восстановления узлов',
      image: 'https://cdn.poehali.dev/projects/7974b9bd-0297-4c1b-8ad9-fe09255dd233/files/508c5e85-8833-4674-bd63-584c820bade7.jpg',
      icon: 'Wrench',
      features: ['Выезд 24/7', 'Гарантия', 'Опыт 10+ лет'],
    },
    {
      title: 'Поставка запчастей',
      description: 'Оригинальные запчасти с доставкой со склада в Москве или из Италии',
      image: 'https://cdn.poehali.dev/projects/7974b9bd-0297-4c1b-8ad9-fe09255dd233/files/d44dfc4c-8888-4e4b-8c12-33a5be99ecce.jpg',
      icon: 'Package',
      features: ['100% оригинал', 'Быстрая доставка', 'Наличие на складе'],
    },
    {
      title: 'Модернизация линий',
      description: 'Увеличение производительности, установка модулей, автоматизация процессов',
      image: 'https://cdn.poehali.dev/projects/7974b9bd-0297-4c1b-8ad9-fe09255dd233/files/9b47bd33-6cda-40a8-bfdc-333ab878f8dd.jpg',
      icon: 'Zap',
      features: ['До +50% скорость', 'Окупаемость 12 мес', 'Под ключ'],
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-gradient-to-br from-card via-background to-card relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16 px-4">
          <div className="inline-block">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4 relative pb-4 md:pb-6">
              Сервисное обслуживание
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 md:w-24 h-1 bg-accent rounded-full"></span>
            </h2>
          </div>
          <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto mt-4 md:mt-6 leading-relaxed">
            Мы предоставляем полный спектр сервисных услуг для оборудования Nelden Industry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 hover:border-accent/50 bg-white"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 md:h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent z-10"></div>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-3 right-3 md:top-4 md:right-4 w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center shadow-lg z-20 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                  <Icon name={service.icon} className="text-accent" size={24} />
                </div>
              </div>
              
              <CardHeader className="pb-2 md:pb-3">
                <CardTitle className="text-lg md:text-xl font-bold text-center leading-tight min-h-[3rem] md:min-h-[3.5rem] flex items-center justify-center px-2">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-3 md:space-y-4">
                <CardDescription className="text-center text-xs md:text-sm leading-relaxed min-h-[4rem] md:min-h-[4.5rem] flex items-center justify-center px-2">
                  {service.description}
                </CardDescription>
                
                <div className="space-y-1.5 md:space-y-2 py-3 md:py-4 border-t border-border">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-xs md:text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-white w-full font-semibold transition-all duration-300 hover:shadow-lg text-sm md:text-base py-5 md:py-6"
                  onClick={scrollToContact}
                >
                  Заказать услугу
                  <Icon name="ArrowRight" size={16} className="ml-2 md:w-[18px] md:h-[18px]" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}