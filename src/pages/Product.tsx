
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import Icon from '@/components/ui/icon';
import { trucks } from '@/data/trucks';
import ProductCard from '@/components/ui/product-card';

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const [isFavorite, setIsFavorite] = useState(false);
  
  // Находим товар по ID
  const product = trucks.find(truck => truck.id === id);
  
  // Похожие товары (той же категории)
  const similarProducts = product 
    ? trucks
        .filter(truck => truck.category === product.category && truck.id !== product.id)
        .slice(0, 4)
    : [];
  
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Товар не найден</h1>
            <p className="text-muted-foreground mb-6">Запрашиваемый товар не существует или был удален</p>
            <Button asChild>
              <Link to="/catalog">Вернуться в каталог</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      maximumFractionDigits: 0
    }).format(price);
  };
  
  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Главная</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/catalog">Каталог</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href={`/catalog?category=${product.category}`}>
                  {product.category}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <span>{product.title}</span>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Product Image */}
            <div className="relative rounded-lg overflow-hidden bg-secondary h-[400px] md:h-[500px]">
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.isNew && (
                  <Badge variant="default" className="bg-primary">Новинка</Badge>
                )}
                {product.isDiscount && product.discountPercent && (
                  <Badge variant="destructive">-{product.discountPercent}%</Badge>
                )}
              </div>
            </div>
            
            {/* Product Info */}
            <div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-3xl font-bold font-playfair mb-2">{product.title}</h1>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs font-normal text-muted-foreground">
                      {product.category}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      ID: {product.id}
                    </span>
                  </div>
                </div>
                <Button 
                  size="icon" 
                  variant="ghost" 
                  className="h-10 w-10 rounded-full hover:bg-secondary"
                  onClick={handleFavoriteClick}
                >
                  <Icon 
                    name={isFavorite ? "Heart" : "Heart"} 
                    className={`h-5 w-5 ${isFavorite ? 'text-destructive fill-destructive' : 'text-muted-foreground'}`} 
                  />
                  <span className="sr-only">Добавить в избранное</span>
                </Button>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Icon name="Calendar" className="h-5 w-5 text-primary" />
                  <span>{product.year} г.</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Activity" className="h-5 w-5 text-primary" />
                  <span>{product.mileage.toLocaleString()} км</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Gauge" className="h-5 w-5 text-primary" />
                  <span>{product.engine}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Truck" className="h-5 w-5 text-primary" />
                  <span>{product.wheelFormula}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Weight" className="h-5 w-5 text-primary" />
                  <span>{product.loadCapacity}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="PaintBucket" className="h-5 w-5 text-primary" />
                  <span>{product.color}</span>
                </div>
              </div>
              
              <Separator className="my-6" />
              
              <div className="mb-6">
                <div className="text-3xl font-bold mb-2 font-playfair">
                  {formatPrice(product.price)}
                  {product.oldPrice && (
                    <span className="text-xl font-normal line-through text-muted-foreground ml-2">
                      {formatPrice(product.oldPrice)}
                    </span>
                  )}
                </div>
                
                <div className="flex items-center gap-2 mb-6">
                  <Badge variant={product.inStock ? "default" : "secondary"}>
                    {product.inStock ? "В наличии" : "Под заказ"}
                  </Badge>
                  <span className="text-sm text-muted-foreground">
                    Доставка от 3 дней
                  </span>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="flex-1">
                    <Icon name="ShoppingCart" className="mr-2 h-5 w-5" />
                    Купить
                  </Button>
                  <Button size="lg" variant="outline" className="flex-1">
                    <Icon name="Phone" className="mr-2 h-5 w-5" />
                    Запросить цену
                  </Button>
                </div>
              </div>
              
              <div className="bg-secondary/50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">Условия покупки:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <Icon name="Check" className="h-4 w-4 text-primary" />
                    <span>Лизинг от 6 месяцев</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Icon name="Check" className="h-4 w-4 text-primary" />
                    <span>Кредит от 9.9% годовых</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Icon name="Check" className="h-4 w-4 text-primary" />
                    <span>Trade-in вашей текущей техники</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Icon name="Check" className="h-4 w-4 text-primary" />
                    <span>Гарантия 1 год или 100 000 км</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <Tabs defaultValue="description" className="mb-12">
            <TabsList>
              <TabsTrigger value="description">Описание</TabsTrigger>
              <TabsTrigger value="specifications">Характеристики</TabsTrigger>
              <TabsTrigger value="features">Комплектация</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="mt-6">
              <div className="prose max-w-none">
                <p className="text-lg">{product.description}</p>
              </div>
            </TabsContent>
            <TabsContent value="specifications" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Основные характеристики</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">Марка и модель</span>
                      <span className="font-medium">{product.title}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">Год выпуска</span>
                      <span className="font-medium">{product.year}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">Пробег</span>
                      <span className="font-medium">{product.mileage.toLocaleString()} км</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">Состояние</span>
                      <span className="font-medium">{product.condition}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">Цвет</span>
                      <span className="font-medium">{product.color}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">Категория</span>
                      <span className="font-medium">{product.category}</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Технические характеристики</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">Двигатель</span>
                      <span className="font-medium">{product.engine}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">Мощность</span>
                      <span className="font-medium">{product.power}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">Трансмиссия</span>
                      <span className="font-medium">{product.transmission}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">Колесная формула</span>
                      <span className="font-medium">{product.wheelFormula}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">Тип кабины</span>
                      <span className="font-medium">{product.cabinType}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">Грузоподъемность</span>
                      <span className="font-medium">{product.loadCapacity}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">Количество осей</span>
                      <span className="font-medium">{product.axles}</span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="features" className="mt-6">
              <div className="space-y-6">
                <h3 className="text-lg font-semibold">Комплектация и опции</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Icon name="Check" className="h-5 w-5 text-primary shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
          
          {/* Related Products */}
          {similarProducts.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 font-playfair">Похожие предложения</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {similarProducts.map(truck => (
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
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductPage;
