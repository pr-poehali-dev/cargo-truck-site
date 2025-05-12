
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Sheet, 
  SheetTrigger, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetDescription 
} from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-sm bg-background/80 border-b">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2">
            <Icon name="Truck" className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold font-playfair tracking-tight">ГрузАвто</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
              Главная
            </Link>
            <Link to="/catalog" className="text-sm font-medium hover:text-primary transition-colors">
              Каталог
            </Link>
            <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">
              О нас
            </Link>
            <Link to="/contact" className="text-sm font-medium hover:text-primary transition-colors">
              Контакты
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/favorites" className="hidden md:flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors">
            <Icon name="Heart" className="h-5 w-5" />
            <span>Избранное</span>
          </Link>
          
          <Link to="/cart" className="hidden md:flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors">
            <Icon name="ShoppingBag" className="h-5 w-5" />
            <span>Корзина</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-2">
            <Button variant="outline" asChild>
              <Link to="/login">Войти</Link>
            </Button>
            <Button asChild>
              <Link to="/register">Регистрация</Link>
            </Button>
          </div>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="ghost" className="md:hidden">
                <Icon name="Menu" className="h-5 w-5" />
                <span className="sr-only">Меню</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>ГрузАвто</SheetTitle>
                <SheetDescription>
                  Надежные грузовые автомобили для ваших задач
                </SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-8">
                <Link to="/" className="text-base font-medium hover:text-primary transition-colors">
                  Главная
                </Link>
                <Link to="/catalog" className="text-base font-medium hover:text-primary transition-colors">
                  Каталог
                </Link>
                <Link to="/about" className="text-base font-medium hover:text-primary transition-colors">
                  О нас
                </Link>
                <Link to="/contact" className="text-base font-medium hover:text-primary transition-colors">
                  Контакты
                </Link>
                <Link to="/favorites" className="text-base font-medium hover:text-primary transition-colors">
                  Избранное
                </Link>
                <Link to="/cart" className="text-base font-medium hover:text-primary transition-colors">
                  Корзина
                </Link>
                <hr className="my-2" />
                <div className="flex flex-col gap-2">
                  <Button variant="outline" asChild>
                    <Link to="/login">Войти</Link>
                  </Button>
                  <Button asChild>
                    <Link to="/register">Регистрация</Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
