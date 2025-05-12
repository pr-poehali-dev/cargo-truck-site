
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/components/ui/product-card';
import Icon from '@/components/ui/icon';
import { trucks } from '@/data/trucks';

const HomePage = () => {
  const latestTrucks = trucks.slice(0, 4);
  const discountTrucks = trucks.filter(truck => truck.isDiscount).slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2000')" 
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-xl space-y-6 animate-fade-in">
            <Badge className="bg-primary/80 hover:bg-primary">Лидер рынка с 2005 года</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-playfair">
              Надежные грузовые автомобили для вашего бизнеса
            </h1>
            <p className="text-xl text-white/80">
              Широкий выбор новой и подержанной грузовой техники от ведущих мировых производителей
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link to="/catalog">Смотреть каталог</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                <Link to="/contact">Связаться с нами</Link>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent h-24" />
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-sm">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Icon name="Truck" className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Большой выбор</h3>
              <p className="text-muted-foreground">Более 500 единиц техники различных марок и моделей</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-sm">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Icon name="BadgeCheck" className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Гарантия качества</h3>
              <p className="text-muted-foreground">Полная предпродажная проверка и подготовка техники</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-sm">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Icon name="Wrench" className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Сервисное обслуживание</h3>
              <p className="text-muted-foreground">Собственный сервисный центр и оригинальные запчасти</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-sm">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Icon name="CreditCard" className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Удобная оплата</h3>
              <p className="text-muted-foreground">Лизинг, кредит, рассрочка и другие финансовые программы</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Latest Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold font-playfair">Новые поступления</h2>
            <Button variant="outline" asChild>
              <Link to="/catalog">Смотреть все</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {latestTrucks.map(truck => (
              <ProductCard
                key={truck.id}
                id={truck.id}
                title={truck.title}
                image={truck.image}
                price={truck.price}
                category={truck.category}
                isNew={truck.isNew}
                isDiscount={truck.isDiscount}
                discountPercent={truck.discountPercent}
                year={truck.year}
                mileage={truck.mileage}
                engine={truck.engine}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
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
                <li className="flex items-center gap-3">
                  <Icon name="Phone" className="h-5 w-5 text-primary" />
                  <a href="tel:+74951234567" className="hover:text-primary transition-colors">
                    +7 (495) 123-45-67
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="Mail" className="h-5 w-5 text-primary" />
                  <a href="mailto:info@gruzavto.ru" className="hover:text-primary transition-colors">
                    info@gruzavto.ru
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="MapPin" className="h-5 w-5 text-primary" />
                  <span>г. Москва, ул. Грузовая, д. 123</span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="Clock" className="h-5 w-5 text-primary" />
                  <span>Пн-Пт: 9:00-20:00, Сб-Вс: 10:00-18:00</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Special Offers */}
      {discountTrucks.length > 0 && (
        <section className="py-16 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold font-playfair">Специальные предложения</h2>
              <Button variant="outline" asChild>
                <Link to="/catalog?discount=true">Все акции</Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {discountTrucks.map(truck => (
                <ProductCard
                  key={truck.id}
                  id={truck.id}
                  title={truck.title}
                  image={truck.image}
                  price={truck.price}
                  category={truck.category}
                  isNew={truck.isNew}
                  isDiscount={truck.isDiscount}
                  discountPercent={truck.discountPercent}
                  year={truck.year}
                  mileage={truck.mileage}
                  engine={truck.engine}
                />
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* Brands */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center font-playfair">Популярные бренды</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['КАМАЗ', 'MAN', 'Volvo', 'Scania', 'Mercedes-Benz', 'DAF', 'Isuzu', 'ГАЗ'].map((brand, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-gray">{brand}</span>
                </div>
                <span className="text-center">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default HomePage;
