
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface ContactItemProps {
  icon: string;
  children: React.ReactNode;
  href?: string;
}

const ContactItem = ({ icon, children, href }: ContactItemProps) => {
  const content = (
    <div className="flex items-center gap-3">
      <Icon name={icon} className="h-5 w-5 text-primary" />
      {children}
    </div>
  );

  if (href) {
    return <li><a href={href} className="hover:text-primary transition-colors">{content}</a></li>;
  }
  
  return <li>{content}</li>;
};

const ContactSection = () => {
  return (
    <section className="py-16 bg-dark text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold mb-4 font-playfair">Нужна консультация?</h2>
            <p className="text-white/80 mb-6">
              Наши специалисты помогут подобрать грузовой автомобиль, 
              который идеально подойдет для решения ваших бизнес-задач
            </p>
            <Button className="bg-primary text-white" size="lg" asChild>
              <Link to="/contact">Получить консультацию</Link>
            </Button>
          </div>
          
          <div className="w-full md:w-1/3 bg-white/10 p-6 rounded-lg backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-4">Быстрая связь</h3>
            <ul className="space-y-4">
              <ContactItem icon="Phone" href="tel:+74951234567">
                +7 (495) 123-45-67
              </ContactItem>
              <ContactItem icon="Mail" href="mailto:info@gruzavto.ru">
                info@gruzavto.ru
              </ContactItem>
              <ContactItem icon="MapPin">
                г. Москва, ул. Грузовая, д. 123
              </ContactItem>
              <ContactItem icon="Clock">
                Пн-Пт: 9:00-20:00, Сб-Вс: 10:00-18:00
              </ContactItem>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
