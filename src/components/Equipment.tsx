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
    <section id="equipment" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold text-primary mb-4 inline-block relative pb-4">
            Оборудование Nelden
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-accent"></span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Полный модельный ряд итальянского оборудования для розлива напитков
          </p>
        </div>

        <Tabs defaultValue="urano-cans" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
            {equipment.map((item) => (
              <TabsTrigger key={item.id} value={item.id} className="font-semibold">
                {item.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {equipment.map((item) => (
            <TabsContent key={item.id} value={item.id} className="animate-fade-in">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="rounded-lg shadow-xl w-full"
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-primary mb-4">{item.title}</h3>
                  <p className="text-lg text-foreground mb-6">{item.description}</p>

                  <div className="space-y-3 mb-8">
                    {item.specs.map((spec, index) => (
                      <div key={index} className="flex font-mono text-sm">
                        <span className="font-semibold text-primary min-w-[180px]">{spec.label}</span>
                        <span className="text-foreground">{spec.value}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-white"
                    onClick={scrollToContact}
                  >
                    Запросить КП
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