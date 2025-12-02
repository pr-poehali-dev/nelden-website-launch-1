import Icon from '@/components/ui/icon';

export default function About() {
  const features = [
    { icon: 'Cog', title: 'Опытные инженеры', description: 'Сертифицированные специалисты' },
    { icon: 'Wrench', title: 'Оригинальные запчасти', description: 'Прямые поставки из Италии' },
    { icon: 'Clock', title: 'Быстрая реакция', description: 'Выезд в течение 24 часов' },
    { icon: 'Award', title: 'Гарантия качества', description: 'Работа по стандартам Nelden' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold text-primary mb-6 relative pb-4">
              Nelden в России
              <span className="absolute bottom-0 left-0 w-16 h-1 bg-accent"></span>
            </h2>
            <p className="text-lg mb-4 text-foreground">
              Мы являемся официальным представительством итальянского производителя оборудования для розлива напитков <strong>Nelden Industry</strong> на территории России и стран СНГ.
            </p>
            <p className="text-lg mb-4 text-foreground">
              Наша команда обеспечивает профессиональный сервис, техническую поддержку и поставку оригинальных запчастей для всего модельного ряда оборудования Nelden.
            </p>
            <p className="text-lg mb-8 text-foreground">
              С 2015 года мы успешно обслуживаем более 50 предприятий в России, помогая им поддерживать высокую производительность линий розлива.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-card flex items-center justify-center flex-shrink-0">
                    <Icon name={feature.icon} className="text-accent" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-fade-in">
            <img
              src="https://cdn.poehali.dev/projects/7974b9bd-0297-4c1b-8ad9-fe09255dd233/files/508c5e85-8833-4674-bd63-584c820bade7.jpg"
              alt="Оборудование Nelden"
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}