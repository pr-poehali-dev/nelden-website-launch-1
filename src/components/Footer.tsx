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
            <div className="mb-6">
              <img 
                src="https://cdn.poehali.dev/files/ad869417-b707-41c5-a2a1-208a80d75e7a.png" 
                alt="Nelden Industry" 
                className="h-12 w-auto mb-4 brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              ПРЕДСТАВИТЕЛЬСТВО ООО "НЕЛДЕН ИНДАСТРИ С.Р.Л." В ГОРОДЕ МОСКВЕ
            </p>
            <p className="text-gray-400 mb-6 text-xs">
              ИНН 9909538392, КПП 774792001
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
                <Icon name="MapPin" size={18} className="mt-1 flex-shrink-0 text-accent" />
                <span className="text-sm leading-relaxed">Россия, 125252, г. Москва,<br />проезд Березовой Рощи, д. 12, каб. 689</span>
              </li>
              <li className="flex items-start space-x-2">
                <Icon name="Phone" size={18} className="mt-1 flex-shrink-0 text-accent" />
                <a href="tel:+74951234567" className="text-sm hover:text-accent transition-colors">+7 (495) 123-45-67</a>
              </li>
              <li className="flex items-start space-x-2">
                <Icon name="Mail" size={18} className="mt-1 flex-shrink-0 text-accent" />
                <a href="mailto:nelden@internet.ru" className="text-sm hover:text-accent transition-colors">nelden@internet.ru</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} NELDEN INDUSTRY S.R.L. Все права защищены.</p>
            <div className="flex items-center gap-2">
              <Icon name="MapPin" size={14} className="text-accent" />
              <span className="text-xs">Made in Italy</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}