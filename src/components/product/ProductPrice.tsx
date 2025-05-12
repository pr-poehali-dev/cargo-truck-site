
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface ProductPriceProps {
  price: number;
  oldPrice?: number;
  inStock: boolean;
}

/**
 * Компонент с ценой и кнопками действий
 */
const ProductPrice = ({ price, oldPrice, inStock }: ProductPriceProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="mb-6">
      <div className="text-3xl font-bold mb-2 font-playfair">
        {formatPrice(price)}
        {oldPrice && (
          <span className="text-xl font-normal line-through text-muted-foreground ml-2">
            {formatPrice(oldPrice)}
          </span>
        )}
      </div>
      
      <div className="flex items-center gap-2 mb-6">
        <Badge variant={inStock ? "default" : "secondary"}>
          {inStock ? "В наличии" : "Под заказ"}
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
  );
};

export default ProductPrice;
