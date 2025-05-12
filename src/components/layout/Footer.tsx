
import * as React from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-secondary py-12 mt-12 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <Icon name="Truck" className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold font-playfair tracking-tight">ГрузАвто</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Лидер на рынке продаж грузовых автомобилей с 2005 года. Качество, надежность, доступность.
            </p>
            <div className="flex gap-4">
              <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Facebook" className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Instagram" className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Youtube" className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Twitter" className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Каталог</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/catalog/cargo" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Грузовики
                </Link>
              </li>
              <li>
                <Link to="/catalog/special" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Спецтехника
                </Link>
              </li>
              <li>
                <Link to="/catalog/semi" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Тягачи
                </Link>
              </li>
              <li>
                <Link to="/catalog/trailers" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Прицепы
                </Link>
              </li>
              <li>
                <Link to="/catalog/parts" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Запчасти
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Информация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  О компании
                </Link>
              </li>
              <li>
                <Link to="/delivery" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Доставка
                </Link>
              </li>
              <li>
                <Link to="/payment" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Оплата
                </Link>
              </li>
              <li>
                <Link to="/warranty" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Гарантия
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Отзывы
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Icon name="MapPin" className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>г. Москва, ул. Грузовая, д. 123, стр. 4</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Icon name="Phone" className="h-5 w-5 text-primary shrink-0" />
                <a href="tel:+74951234567" className="hover:text-primary transition-colors">+7 (495) 123-45-67</a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Icon name="Mail" className="h-5 w-5 text-primary shrink-0" />
                <a href="mailto:info@gruzavto.ru" className="hover:text-primary transition-colors">info@gruzavto.ru</a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Icon name="Clock" className="h-5 w-5 text-primary shrink-0" />
                <span>Пн-Пт: 9:00-20:00, Сб-Вс: 10:00-18:00</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 ГрузАвто. Все права защищены.
          </p>
          <div className="flex gap-4">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Политика конфиденциальности
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Условия использования
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
