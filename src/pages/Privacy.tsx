import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors mb-8">
            <Icon name="ChevronLeft" size={16} />
            На главную
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-3">
            Политика обработки персональных данных
          </h1>
          <p className="text-sm text-muted-foreground mb-10">
            Действует с момента публикации. Версия от {new Date().getFullYear()} года.
          </p>

          <div className="space-y-8 text-foreground leading-relaxed text-sm md:text-base">
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">1. Оператор персональных данных</h2>
              <p>
                Оператором персональных данных является представительство ООО «НЕЛДЕН ИНДАСТРИ С.Р.Л.» в городе Москве.
              </p>
              <p className="mt-3 text-muted-foreground">
                ИНН 9909538392 · КПП 774792001<br />
                Адрес: 125252, г. Москва, проезд Березовой Рощи, д. 12, каб. 689<br />
                Email: info@neldenindustry.ru<br />
                Телефон: +7 495 135-85-49
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">2. Правовая основа</h2>
              <p>
                Обработка персональных данных осуществляется в соответствии с Федеральным законом
                от 27.07.2006 № 152-ФЗ «О персональных данных» и иными нормативно-правовыми актами Российской Федерации.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">3. Какие данные собираются</h2>
              <p>На сайте автоматически собираются обезличенные технические данные посредством сервисов веб-аналитики:</p>
              <ul className="list-disc list-inside mt-3 space-y-1 text-muted-foreground">
                <li>IP-адрес посетителя</li>
                <li>Данные cookie-файлов</li>
                <li>Информация о браузере и устройстве</li>
                <li>Время посещения и просмотренные страницы</li>
              </ul>
              <p className="mt-3">
                При обращении по телефону или электронной почте вы можете добровольно сообщить:
                имя, контактный телефон, email и текст обращения.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">4. Цели обработки</h2>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Ответы на запросы и обращения посетителей сайта</li>
                <li>Информирование об услугах и оборудовании компании</li>
                <li>Улучшение качества сайта и анализ его работы</li>
                <li>Исполнение договорных обязательств</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">5. Сервисы веб-аналитики</h2>
              <p>
                На сайте используется сервис «Яндекс.Метрика» (ООО «ЯНДЕКС», Россия) для сбора статистики посещений.
                Метрика устанавливается только после получения вашего согласия в соответствующем уведомлении на сайте.
                Вы можете отозвать согласие, очистив cookie-файлы вашего браузера.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">6. Сроки и место хранения</h2>
              <p>
                Персональные данные хранятся на серверах, расположенных на территории Российской Федерации,
                в течение срока, необходимого для достижения целей обработки, но не более 3 (трёх) лет.
                По истечении срока данные подлежат удалению или обезличиванию.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">7. Передача третьим лицам</h2>
              <p>
                Оператор не передаёт персональные данные третьим лицам, за исключением случаев,
                прямо предусмотренных законодательством Российской Федерации.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">8. Права субъекта персональных данных</h2>
              <p>Вы имеете право:</p>
              <ul className="list-disc list-inside mt-3 space-y-1 text-muted-foreground">
                <li>Получать информацию об обработке своих персональных данных</li>
                <li>Требовать уточнения, блокирования или уничтожения своих данных</li>
                <li>Отозвать согласие на обработку персональных данных</li>
                <li>Обжаловать действия Оператора в Роскомнадзоре или суде</li>
              </ul>
              <p className="mt-3">
                Для реализации прав направьте обращение на email{' '}
                <a href="mailto:info@neldenindustry.ru" className="text-accent hover:underline">info@neldenindustry.ru</a>{' '}
                или письмом по адресу Оператора.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">9. Безопасность</h2>
              <p>
                Оператор принимает необходимые правовые, организационные и технические меры
                для защиты персональных данных от неправомерного или случайного доступа,
                уничтожения, изменения, блокирования, копирования и распространения.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">10. Изменения политики</h2>
              <p>
                Оператор вправе вносить изменения в настоящую Политику. Новая редакция вступает в силу
                с момента её размещения на сайте.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
