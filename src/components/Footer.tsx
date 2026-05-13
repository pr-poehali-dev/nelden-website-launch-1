import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-8 mb-10 md:mb-12">
          <div>
            <a
              href="https://www.neldenindustry.it"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mb-4 md:mb-6 group"
            >
              <img
                src="https://cdn.poehali.dev/files/ad869417-b707-41c5-a2a1-208a80d75e7a.png"
                alt="Nelden Industry"
                className="h-10 md:h-12 w-auto mb-3 md:mb-4 brightness-0 invert group-hover:opacity-80 transition-opacity"
              />
            </a>
            <p className="text-gray-300 mb-3 md:mb-4 text-xs md:text-sm leading-relaxed">
              ПРЕДСТАВИТЕЛЬСТВО ООО "НЕЛДЕН ИНДАСТРИ С.Р.Л." В ГОРОДЕ МОСКВЕ
            </p>
            <p className="text-gray-400 mb-4 md:mb-6 text-[11px] md:text-xs">
              ИНН 9909538392, КПП 774792001
            </p>
            <a
              href="https://www.neldenindustry.it"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs md:text-sm text-gray-300 hover:text-accent transition-colors mb-4"
            >
              <Icon name="ExternalLink" size={14} className="text-accent" />
              <span>neldenindustry.it</span>
            </a>
            <div className="flex">
              <a href="mailto:info@neldenindustry.ru" className="inline-flex items-center gap-2 w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/10 hover:bg-accent transition-colors justify-center">
                <Icon name="Mail" size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 relative pb-2">
              Навигация
              <span className="absolute bottom-0 left-0 w-10 md:w-12 h-0.5 bg-accent"></span>
            </h3>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <button onClick={() => scrollToSection('hero')} className="text-sm md:text-base text-gray-300 hover:text-accent transition-colors">
                  Главная
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="text-sm md:text-base text-gray-300 hover:text-accent transition-colors">
                  О компании
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-sm md:text-base text-gray-300 hover:text-accent transition-colors">
                  Сервис
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('equipment')} className="text-sm md:text-base text-gray-300 hover:text-accent transition-colors">
                  Оборудование
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 relative pb-2">
              Услуги
              <span className="absolute bottom-0 left-0 w-10 md:w-12 h-0.5 bg-accent"></span>
            </h3>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <a href="#" className="text-sm md:text-base text-gray-300 hover:text-accent transition-colors">
                  Техническое обслуживание
                </a>
              </li>
              <li>
                <a href="#" className="text-sm md:text-base text-gray-300 hover:text-accent transition-colors">
                  Ремонт оборудования
                </a>
              </li>
              <li>
                <a href="#" className="text-sm md:text-base text-gray-300 hover:text-accent transition-colors">
                  Поставка запчастей
                </a>
              </li>
              <li>
                <a href="#" className="text-sm md:text-base text-gray-300 hover:text-accent transition-colors">
                  Модернизация линий
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 relative pb-2">
              Контакты
              <span className="absolute bottom-0 left-0 w-10 md:w-12 h-0.5 bg-accent"></span>
            </h3>
            <ul className="space-y-2 md:space-y-3 text-gray-300">
              <li className="flex items-start space-x-2">
                <Icon name="MapPin" size={16} className="mt-0.5 md:mt-1 flex-shrink-0 text-accent" />
                <span className="text-xs md:text-sm leading-relaxed">125252, г. Москва,<br />проезд Березовой Рощи, д. 12, каб. 689</span>
              </li>
              <li className="flex items-start space-x-2">
                <Icon name="Phone" size={16} className="mt-0.5 md:mt-1 flex-shrink-0 text-accent" />
                <a href="tel:+74951358549" className="text-xs md:text-sm hover:text-accent transition-colors">+7 495 135-85-49</a>
              </li>
              <li className="flex items-start space-x-2">
                <Icon name="Mail" size={16} className="mt-0.5 md:mt-1 flex-shrink-0 text-accent" />
                <a href="mailto:info@neldenindustry.ru" className="text-xs md:text-sm hover:text-accent transition-colors break-words">info@neldenindustry.ru</a>
              </li>
              <li className="flex items-start space-x-2">
                <Icon name="Clock" size={16} className="mt-0.5 md:mt-1 flex-shrink-0 text-accent" />
                <span className="text-xs md:text-sm">Прием заявок: 24/7</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 text-xs md:text-sm text-gray-400">
            <p className="text-center md:text-left">&copy; {new Date().getFullYear()} NELDEN INDUSTRY S.R.L. Все права защищены.</p>
            <div className="flex items-center gap-4 md:gap-6">
              <Link to="/privacy" className="text-[11px] md:text-xs hover:text-accent transition-colors">
                Политика конфиденциальности
              </Link>
              <div className="flex items-center gap-1.5 md:gap-2">
                <Icon name="MapPin" size={12} className="md:w-3.5 md:h-3.5 text-accent" />
                <span className="text-[11px] md:text-xs">Made in Italy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}