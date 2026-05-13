import Icon from '@/components/ui/icon';

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-card via-background to-card relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-accent/3 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">

        <div className="text-center mb-16 md:mb-20">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-accent mb-5">Контакты</p>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 relative inline-block pb-5">
            Свяжитесь с нами
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-14 h-[2px] bg-accent"></span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed mt-2">
            Для консультаций и заявок обращайтесь напрямую — по телефону или электронной почте
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mb-12">

            <div className="group flex flex-col items-center text-center p-8 md:p-10 rounded-2xl bg-white border border-border hover:border-accent/30 hover:shadow-2xl transition-all duration-500">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 group-hover:scale-105 transition-all duration-300">
                <Icon name="MapPin" className="text-accent" size={26} />
              </div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-3">Адрес</p>
              <p className="text-sm md:text-base text-foreground leading-relaxed">
                125252, г. Москва<br />
                проезд Березовой Рощи,<br />
                д. 12, каб. 689
              </p>
            </div>

            <div className="group flex flex-col items-center text-center p-8 md:p-10 rounded-2xl bg-white border border-border hover:border-accent/30 hover:shadow-2xl transition-all duration-500">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 group-hover:scale-105 transition-all duration-300">
                <Icon name="Phone" className="text-accent" size={26} />
              </div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-3">Телефон</p>
              <a
                href="tel:+74951358549"
                className="text-foreground hover:text-accent transition-colors text-lg md:text-xl font-semibold tracking-tight"
              >
                +7 495 135-85-49
              </a>
              <p className="text-xs text-muted-foreground mt-3 leading-relaxed">Круглосуточно,<br />без выходных</p>
            </div>

            <div className="group flex flex-col items-center text-center p-8 md:p-10 rounded-2xl bg-white border border-border hover:border-accent/30 hover:shadow-2xl transition-all duration-500">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 group-hover:scale-105 transition-all duration-300">
                <Icon name="Mail" className="text-accent" size={26} />
              </div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-3">Email</p>
              <a
                href="mailto:info@neldenindustry.ru"
                className="text-foreground hover:text-accent transition-colors text-base md:text-lg font-semibold"
              >
                info@neldenindustry.ru
              </a>
            </div>

          </div>

          <div className="text-center border-t border-border/50 pt-8">
            <p className="text-xs text-muted-foreground tracking-wide leading-relaxed">
              ПРЕДСТАВИТЕЛЬСТВО ООО «НЕЛДЕН ИНДАСТРИ С.Р.Л.» В ГОРОДЕ МОСКВЕ<br />
              ИНН 9909538392 · КПП 774792001
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}