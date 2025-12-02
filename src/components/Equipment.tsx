import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Equipment() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const equipment = [
    {
      id: 'urano-cans',
      name: 'URANO CANS',
      title: 'URANO CANS - для банок',
      description: 'Моноблок для розлива в алюминиевые банки и жестяные емкости. Подходит для газированных и негазированных напитков.',
      specs: [
        { label: 'Производительность:', value: '2.500 - 80.000 банок/час' },
        { label: 'Объем банок:', value: '150 мл - 1000 мл' },
        { label: 'Рабочее давление:', value: 'до 8 бар' },
        { label: 'Материалы:', value: 'AISI 304/316 нержавеющая сталь' },
      ],
      image: 'https://cdn.poehali.dev/projects/7974b9bd-0297-4c1b-8ad9-fe09255dd233/files/d9653f85-55b8-4d08-b256-f226bc52710b.jpg',
    },
    {
      id: 'urano',
      name: 'URANO',
      title: 'URANO - для стекла и ПЭТ',
      description: 'Моноблок для розлива газированных напитков в стеклянные и ПЭТ бутылки различных форматов.',
      specs: [
        { label: 'Производительность:', value: '1.500 - 50.000 бутылок/час' },
        { label: 'Типы клапанов:', value: 'механические, электропневматические' },
        { label: 'Система Neck Handling:', value: 'для ПЭТ бутылок' },
        { label: 'Сертификация:', value: 'PED, CE, Washable версия' },
      ],
      image: 'https://cdn.poehali.dev/projects/7974b9bd-0297-4c1b-8ad9-fe09255dd233/files/9b47bd33-6cda-40a8-bfdc-333ab878f8dd.jpg',
    },
    {
      id: 'giove',
      name: 'GIOVE',
      title: 'GIOVE - для тихих продуктов',
      description: 'Моноблок для розлива негазированных напитков, масел, молочной продукции в стеклянные и ПЭТ бутылки.',
      specs: [
        { label: 'Производительность:', value: '1.500 - 50.000 бутылок/час' },
        { label: 'Типы клапанов:', value: 'гравитационные, волюметрические, весовые' },
        { label: 'Горячий розлив:', value: 'с рециркуляцией продукта' },
        { label: 'Конфигурация:', value: 'ULTRA CLEAN с HEPA фильтрами' },
      ],
      image: 'https://cdn.poehali.dev/projects/7974b9bd-0297-4c1b-8ad9-fe09255dd233/files/508c5e85-8833-4674-bd63-584c820bade7.jpg',
    },
    {
      id: 'engineering',
      name: 'ENGINEERING',
      title: 'ENGINEERING - комплексные линии',
      description: 'Полные линии розлива "под ключ" для различных продуктов: напитки, масла, химия, средства гигиены.',
      specs: [
        { label: 'Производительность:', value: 'до 50.000 бут/час (стекло/ПЭТ)' },
        { label: 'Для банок:', value: 'до 80.000 банок/час' },
        { label: 'Доп. оборудование:', value: 'депаллетайзеры, конвейеры, CIP системы' },
        { label: 'Проекты:', value: 'мобильные линии, модернизация' },
      ],
      image: 'https://cdn.poehali.dev/projects/7974b9bd-0297-4c1b-8ad9-fe09255dd233/files/9b47bd33-6cda-40a8-bfdc-333ab878f8dd.jpg',
    },
  ];

  return (
    <section id="equipment" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-20 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-5xl font-bold text-primary mb-4 relative pb-6">
              Оборудование Nelden
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-accent rounded-full"></span>
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mt-6 leading-relaxed">
            Полный модельный ряд итальянского оборудования для розлива напитков
          </p>
        </div>

        <Tabs defaultValue="urano-cans" className="w-full max-w-7xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12 bg-card p-2 h-auto gap-2">
            {equipment.map((item) => (
              <TabsTrigger 
                key={item.id} 
                value={item.id} 
                className="font-bold text-base py-4 data-[state=active]:bg-accent data-[state=active]:text-white transition-all duration-300"
              >
                {item.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {equipment.map((item) => (
            <TabsContent key={item.id} value={item.id} className="mt-0">
              <div className="grid lg:grid-cols-2 gap-16 items-center bg-gradient-to-br from-card to-background rounded-2xl p-8 lg:p-12 border-2 border-accent/10">
                <div className="order-2 lg:order-1 relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-primary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="relative rounded-2xl shadow-2xl w-full transform transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                
                <div className="order-1 lg:order-2 space-y-8">
                  <div>
                    <h3 className="text-4xl font-bold text-primary mb-6 leading-tight">{item.title}</h3>
                    <p className="text-lg text-foreground leading-relaxed">{item.description}</p>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-lg space-y-4 border-2 border-accent/10">
                    <h4 className="font-bold text-primary text-lg mb-4 flex items-center">
                      <div className="w-1 h-6 bg-accent rounded-full mr-3"></div>
                      Технические характеристики
                    </h4>
                    {item.specs.map((spec, index) => (
                      <div 
                        key={index} 
                        className="flex items-start py-3 border-b last:border-0 border-border/50 hover:bg-card/50 transition-colors duration-200 rounded px-2"
                      >
                        <span className="font-mono font-semibold text-primary text-sm min-w-[200px] flex-shrink-0">
                          {spec.label}
                        </span>
                        <span className="font-mono text-foreground text-sm">{spec.value}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-white font-semibold text-base px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={scrollToContact}
                  >
                    Запросить коммерческое предложение
                  </Button>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}