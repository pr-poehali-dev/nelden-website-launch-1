import Icon from '@/components/ui/icon';

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-card via-background to-card relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16 px-4">
          <div className="inline-block">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4 relative pb-4 md:pb-6">
              Свяжитесь с нами
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 md:w-24 h-1 bg-accent rounded-full"></span>
            </h2>
          </div>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto mt-4 md:mt-6 leading-relaxed">
            Для консультаций и заявок обращайтесь напрямую — по телефону или электронной почте
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="mb-6 md:mb-8 text-center">
            <p className="text-sm md:text-base text-foreground leading-relaxed mb-1">
              ПРЕДСТАВИТЕЛЬСТВО ООО «НЕЛДЕН ИНДАСТРИ С.Р.Л.» В ГОРОДЕ МОСКВЕ
            </p>
            <p className="text-sm text-muted-foreground">ИНН 9909538392, КПП 774792001</p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 md:gap-6">
            <div className="group flex flex-col items-center text-center p-6 md:p-8 rounded-2xl bg-white border-2 border-transparent hover:border-accent/20 hover:bg-gradient-to-b hover:from-accent/5 hover:to-transparent transition-all duration-300 shadow-sm">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Icon name="MapPin" className="text-accent" size={24} />
              </div>
              <h4 className="font-bold text-primary mb-2 text-base md:text-lg">Адрес</h4>
              <p className="text-sm md:text-base text-foreground leading-relaxed">
                Россия, 125252, г. Москва,<br />проезд Березовой Рощи, д. 12, каб. 689
              </p>
            </div>

            <div className="group flex flex-col items-center text-center p-6 md:p-8 rounded-2xl bg-white border-2 border-transparent hover:border-accent/20 hover:bg-gradient-to-b hover:from-accent/5 hover:to-transparent transition-all duration-300 shadow-sm">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Icon name="Phone" className="text-accent" size={24} />
              </div>
              <h4 className="font-bold text-primary mb-2 text-base md:text-lg">Телефон</h4>
              <a href="tel:+74951234567" className="text-foreground hover:text-accent transition-colors text-base md:text-xl font-semibold">
                +7 (495) 123-45-67
              </a>
              <p className="text-xs text-muted-foreground mt-2">Круглосуточно, без выходных</p>
            </div>

            <div className="group flex flex-col items-center text-center p-6 md:p-8 rounded-2xl bg-white border-2 border-transparent hover:border-accent/20 hover:bg-gradient-to-b hover:from-accent/5 hover:to-transparent transition-all duration-300 shadow-sm">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Icon name="Mail" className="text-accent" size={24} />
              </div>
              <h4 className="font-bold text-primary mb-2 text-base md:text-lg">Email</h4>
              <a href="mailto:nelden@internet.ru" className="text-foreground hover:text-accent transition-colors text-base md:text-lg font-semibold break-all">
                nelden@internet.ru
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
