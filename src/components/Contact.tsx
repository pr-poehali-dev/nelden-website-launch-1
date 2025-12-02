import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { toast as sonnerToast } from 'sonner';
import Icon from '@/components/ui/icon';

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://functions.poehali.dev/7f3adecd-34d5-42e7-90a2-b210090f4508', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message || formData.service || 'Нет сообщения',
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      sonnerToast.success('Заявка успешно отправлена!', {
        description: '✉️ Мы получили ваше сообщение и свяжемся с вами в ближайшее время.',
        duration: 5000,
      });
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    } catch (error) {
      sonnerToast.error('Не удалось отправить заявку', {
        description: '❌ Попробуйте позже или напишите напрямую на nelden@internet.ru',
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
          <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto mt-4 md:mt-6 leading-relaxed">
            Оставьте заявку на сервисное обслуживание, запчасти или консультацию по оборудованию
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 max-w-7xl mx-auto">
          <div>
            <div className="mb-8 md:mb-10">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-3 md:mb-4">Контакты</h3>
              <p className="text-sm md:text-base text-foreground leading-relaxed mb-3 md:mb-4">
                ПРЕДСТАВИТЕЛЬСТВО ОБЩЕСТВА С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "НЕЛДЕН ИНДАСТРИ С.Р.Л." В ГОРОДЕ МОСКВЕ
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                ИНН 9909538392, КПП 774792001
              </p>
            </div>

            <div className="space-y-4 md:space-y-6">
              <div className="group flex items-start space-x-3 md:space-x-5 p-4 md:p-6 rounded-xl bg-white hover:bg-gradient-to-r hover:from-accent/5 hover:to-transparent transition-all duration-300 border-2 border-transparent hover:border-accent/20">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <Icon name="MapPin" className="text-accent" size={20} />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-primary mb-1 md:mb-2 text-base md:text-lg">Адрес офиса</h4>
                  <p className="text-sm md:text-base text-foreground leading-relaxed">Россия, 125252, г. Москва, проезд Березовой Рощи, д. 12, каб. 689</p>
                </div>
              </div>

              <div className="group flex items-start space-x-3 md:space-x-5 p-4 md:p-6 rounded-xl bg-white hover:bg-gradient-to-r hover:from-accent/5 hover:to-transparent transition-all duration-300 border-2 border-transparent hover:border-accent/20">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <Icon name="Mail" className="text-accent" size={20} />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-primary mb-1 md:mb-2 text-base md:text-lg">Email</h4>
                  <a href="mailto:nelden@internet.ru" className="text-foreground hover:text-accent transition-colors text-base md:text-lg font-semibold break-all">nelden@internet.ru</a>
                </div>
              </div>

              <div className="group flex items-start space-x-3 md:space-x-5 p-4 md:p-6 rounded-xl bg-white hover:bg-gradient-to-r hover:from-accent/5 hover:to-transparent transition-all duration-300 border-2 border-transparent hover:border-accent/20">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <Icon name="Clock" className="text-accent" size={20} />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-primary mb-1 md:mb-2 text-base md:text-lg">Прием заявок</h4>
                  <p className="text-base md:text-lg text-foreground leading-relaxed font-semibold">24/7</p>
                  <p className="text-xs md:text-sm text-muted-foreground mt-1">Круглосуточно, без выходных</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 bg-white p-6 md:p-10 rounded-2xl shadow-2xl border-2 border-accent/10">
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-6 md:mb-8 text-center">Оставить заявку</h3>
              
              <div>
                <Label htmlFor="name" className="text-primary font-semibold text-sm md:text-base mb-2 md:mb-3 block">Ваше имя *</Label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="h-11 md:h-12 text-sm md:text-base border-2 focus:border-accent"
                  placeholder="Иван Иванов"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-primary font-semibold text-sm md:text-base mb-2 md:mb-3 block">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="h-11 md:h-12 text-sm md:text-base border-2 focus:border-accent"
                  placeholder="ivan@company.ru"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-primary font-semibold text-sm md:text-base mb-2 md:mb-3 block">Телефон *</Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="h-11 md:h-12 text-sm md:text-base border-2 focus:border-accent"
                  placeholder="+7 (999) 123-45-67"
                />
              </div>

              <div>
                <Label htmlFor="service" className="text-primary font-semibold text-sm md:text-base mb-2 md:mb-3 block">Тип услуги</Label>
                <Select
                  value={formData.service}
                  onValueChange={(value) => setFormData({ ...formData, service: value })}
                >
                  <SelectTrigger className="h-11 md:h-12 text-sm md:text-base border-2 focus:border-accent">
                    <SelectValue placeholder="Выберите услугу" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="maintenance">Техническое обслуживание</SelectItem>
                    <SelectItem value="repair">Ремонт оборудования</SelectItem>
                    <SelectItem value="parts">Поставка запчастей</SelectItem>
                    <SelectItem value="modernization">Модернизация линий</SelectItem>
                    <SelectItem value="consultation">Консультация</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message" className="text-primary font-semibold text-sm md:text-base mb-2 md:mb-3 block">Сообщение</Label>
                <Textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="text-sm md:text-base border-2 focus:border-accent resize-none"
                  placeholder="Опишите ваш запрос..."
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                disabled={isSubmitting}
                className="w-full h-12 md:h-14 bg-accent hover:bg-accent/90 text-white font-semibold text-sm md:text-base shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
              >
                {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
                <Icon name="Send" size={18} className="ml-2 md:w-5 md:h-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}