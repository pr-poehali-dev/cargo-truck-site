
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export interface ProductCardProps {
  id: string;
  title: string;
  image: string;
  price: number;
  category: string;
  isFavorite?: boolean;
  isNew?: boolean;
  isDiscount?: boolean;
  discountPercent?: number;
  year?: number;
  mileage?: number;
  engine?: string;
}

const ProductCard = ({
  id,
  title,
  image,
  price,
  category,
  isFavorite = false,
  isNew = false,
  isDiscount = false,
  discountPercent,
  year,
  mileage,
  engine
}: ProductCardProps) => {
  const [favorite, setFavorite] = React.useState(isFavorite);
  
  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setFavorite(!favorite);
  };
  
  const formattedPrice = new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    maximumFractionDigits: 0
  }).format(price);

  return (
    <Card className="group overflow-hidden transition-all duration-300 h-full hover:shadow-md">
      <div className="relative h-48 overflow-hidden">
        <Link to={`/product/${id}`}>
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
        
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isNew && (
            <Badge variant="default" className="bg-primary">Новинка</Badge>
          )}
          {isDiscount && discountPercent && (
            <Badge variant="destructive">-{discountPercent}%</Badge>
          )}
        </div>
        
        <Button 
          size="icon" 
          variant="ghost" 
          className="absolute top-3 right-3 h-9 w-9 rounded-full bg-white/80 hover:bg-white"
          onClick={handleFavoriteClick}
        >
          <Icon 
            name={favorite ? "Heart" : "HeartOutline"} 
            fallback="Heart" 
            className={`h-5 w-5 ${favorite ? 'text-destructive fill-destructive' : 'text-muted-foreground'}`} 
          />
          <span className="sr-only">Add to favorites</span>
        </Button>
      </div>
      
      <CardContent className="p-4">
        <div className="mb-2">
          <Badge variant="outline" className="text-xs font-normal text-muted-foreground">
            {category}
          </Badge>
        </div>
        <Link to={`/product/${id}`} className="block">
          <h3 className="text-lg font-semibold line-clamp-1 mb-1 hover:text-primary transition-colors">
            {title}
          </h3>
        </Link>
        
        {(year || mileage || engine) && (
          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-sm text-muted-foreground">
            {year && (
              <div className="flex items-center gap-1">
                <Icon name="Calendar" className="h-4 w-4" />
                <span>{year} г.</span>
              </div>
            )}
            {mileage && (
              <div className="flex items-center gap-1">
                <Icon name="Activity" className="h-4 w-4" />
                <span>{mileage.toLocaleString()} км</span>
              </div>
            )}
            {engine && (
              <div className="flex items-center gap-1">
                <Icon name="Gauge" className="h-4 w-4" />
                <span>{engine}</span>
              </div>
            )}
          </div>
        )}
      </CardContent>
      
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <div className="font-semibold">
          {formattedPrice}
        </div>
        <Button size="sm" asChild>
          <Link to={`/product/${id}`}>
            Подробнее
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
