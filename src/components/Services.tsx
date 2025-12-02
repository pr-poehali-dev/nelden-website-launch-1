import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

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
      description: 'Плановое и внеплановое ТО оборудования, диагностика, регулировка и настройка для поддержания максимальной производительности.',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop',
      action: 'Заказать ТО',
    },
    {
      title: 'Ремонт оборудования',
      description: 'Качественный ремонт любой сложности: от замены изношенных деталей до восстановления сложных узлов и систем.',
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop',
      action: 'Вызвать мастера',
    },
    {
      title: 'Поставка запчастей',
      description: 'Оригинальные запчасти для оборудования Nelden с доставкой со склада в Москве или прямыми поставками из Италии.',
      image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?q=80&w=800&auto=format&fit=crop',
      action: 'Запросить запчасти',
    },
    {
      title: 'Модернизация линий',
      description: 'Увеличение производительности, установка новых модулей, автоматизация процессов и интеграция с существующими системами.',
      image: 'https://images.unsplash.com/photo-1586864387789-628af9feed72?q=80&w=800&auto=format&fit=crop',
      action: 'Обсудить проект',
    },
  ];

  return (
    <section id="services" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold text-primary mb-4 inline-block relative pb-4">
            Сервисное обслуживание
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-accent"></span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Мы предоставляем полный спектр сервисных услуг для оборудования Nelden Industry
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in">
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm mb-4">{service.description}</CardDescription>
                <Button
                  size="sm"
                  className="bg-accent hover:bg-accent/90 text-white w-full"
                  onClick={scrollToContact}
                >
                  {service.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
