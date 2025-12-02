import Icon from '@/components/ui/icon';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="text-2xl font-bold mb-6">
              NELDEN<span className="text-accent">RUSSIA</span>
            </div>
            <p className="text-gray-300 mb-6">
              Официальное представительство Nelden Industry в России. Качественное оборудование и профессиональный сервис.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Icon name="Linkedin" size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Icon name="Mail" size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 relative pb-2">
              Навигация
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-accent"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollToSection('hero')} className="text-gray-300 hover:text-accent transition-colors">
                  Главная
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-accent transition-colors">
                  О компании
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-accent transition-colors">
                  Сервис
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('equipment')} className="text-gray-300 hover:text-accent transition-colors">
                  Оборудование
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 relative pb-2">
              Услуги
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-accent"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                  Техническое обслуживание
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                  Ремонт оборудования
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                  Поставка запчастей
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                  Модернизация линий
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 relative pb-2">
              Контакты
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-accent"></span>
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start space-x-2">
                <Icon name="MapPin" size={20} className="mt-1 flex-shrink-0" />
                <span>Москва, ул. Промышленная, 15</span>
              </li>
              <li className="flex items-start space-x-2">
                <Icon name="Phone" size={20} className="mt-1 flex-shrink-0" />
                <span>+7 (495) 123-45-67</span>
              </li>
              <li className="flex items-start space-x-2">
                <Icon name="Mail" size={20} className="mt-1 flex-shrink-0" />
                <span>info@nelden-russia.ru</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Nelden Industry Russia. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
