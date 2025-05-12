
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

/**
 * Компонент для отображения страницы "Товар не найден"
 */
const ProductNotFound = () => {
  return (
    <div className="flex-1 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Товар не найден</h1>
        <p className="text-muted-foreground mb-6">Запрашиваемый товар не существует или был удален</p>
        <Button asChild>
          <Link to="/catalog">Вернуться в каталог</Link>
        </Button>
      </div>
    </div>
  );
};

export default ProductNotFound;
