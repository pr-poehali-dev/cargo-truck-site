
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface ProductHeaderProps {
  title: string;
  category: string;
  id: string;
  initialFavorite?: boolean;
}

/**
 * Компонент заголовка продукта с кнопкой добавления в избранное
 */
const ProductHeader = ({ 
  title, 
  category, 
  id, 
  initialFavorite = false 
}: ProductHeaderProps) => {
  const [isFavorite, setIsFavorite] = useState(initialFavorite);
  
  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="flex justify-between items-start mb-4">
      <div>
        <h1 className="text-3xl font-bold font-playfair mb-2">{title}</h1>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="text-xs font-normal text-muted-foreground">
            {category}
          </Badge>
          <span className="text-sm text-muted-foreground">
            ID: {id}
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
  );
};

export default ProductHeader;
