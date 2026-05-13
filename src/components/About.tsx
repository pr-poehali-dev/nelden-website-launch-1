import Icon from '@/components/ui/icon';

export default function About() {
  const features = [
    { icon: 'Cog', title: 'Опытные инженеры', description: 'Сертифицированные специалисты', stat: '15+' },
    { icon: 'Wrench', title: 'Оригинальные запчасти', description: 'Прямые поставки из Италии', stat: '100%' },
    { icon: 'Clock', title: 'Быстрая реакция', description: 'Выезд в течение 24 часов', stat: '24/7' },
    { icon: 'Award', title: 'Гарантия качества', description: 'Работа по стандартам Nelden', stat: '10 лет' },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-accent/3 to-transparent rounded-full animate-pulse-slow"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center max-w-7xl mx-auto">
          <div className="order-2 lg:order-1">
            <div className="inline-block mb-6 md:mb-8">
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4 relative pb-4 md:pb-6 whitespace-nowrap">
                NELDEN в России
                <span className="absolute bottom-0 left-0 w-20 md:w-24 h-1 bg-accent rounded-full"></span>
              </h2>
            </div>
            
            <div className="space-y-4 md:space-y-6 text-base md:text-lg leading-relaxed text-foreground mb-8 md:mb-10">
              <p>
                Мы являемся официальным представительством итальянского производителя оборудования для розлива напитков <strong className="text-primary">Nelden Industry</strong> на территории России и стран СНГ.
              </p>
              <p>
                Наша команда обеспечивает профессиональный сервис, техническую поддержку и поставку оригинальных запчастей для всего модельного ряда оборудования Nelden.
              </p>
              <p className="text-primary font-semibold">
                С 2015 года мы успешно обслуживаем более 50 предприятий в России, помогая им поддерживать высокую производительность линий розлива.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group p-4 md:p-5 rounded-xl bg-gradient-to-br from-card to-background border border-border hover:border-accent/30 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-all duration-500">
                      <Icon name={feature.icon} className="text-accent group-hover:text-white transition-colors duration-500" size={20} />
                    </div>
                    <span className="text-accent font-bold text-sm whitespace-nowrap">{feature.stat}</span>
                  </div>
                  <h4 className="font-bold text-primary text-sm md:text-base leading-tight group-hover:text-accent transition-colors duration-300 mb-1.5 break-words">{feature.title}</h4>
                  <p className="text-xs md:text-sm text-muted-foreground leading-snug break-words">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 animate-slide-in-right">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-primary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 animate-pulse-slow"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-primary/10 rounded-2xl group-hover:opacity-0 transition-opacity duration-500"></div>
              <img
                src="https://cdn.poehali.dev/projects/7974b9bd-0297-4c1b-8ad9-fe09255dd233/bucket/d718a7b9-76fe-4742-b50d-d511f9b87211.JPG"
                alt="Оборудование Nelden"
                className="relative rounded-2xl shadow-2xl w-full transform transition-all duration-700 group-hover:scale-[1.03] group-hover:shadow-accent/20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}