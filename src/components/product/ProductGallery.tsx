
import { Badge } from '@/components/ui/badge';

interface ProductGalleryProps {
  image: string;
  title: string;
  isNew?: boolean;
  isDiscount?: boolean;
  discountPercent?: number;
}

/**
 * Галерея изображений продукта с индикаторами новинки и скидки
 */
const ProductGallery = ({ 
  image, 
  title, 
  isNew, 
  isDiscount, 
  discountPercent 
}: ProductGalleryProps) => {
  return (
    <div className="relative rounded-lg overflow-hidden bg-secondary h-[400px] md:h-[500px]">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover"
      />
      <div className="absolute top-4 left-4 flex flex-col gap-2">
        {isNew && (
          <Badge variant="default" className="bg-primary">Новинка</Badge>
        )}
        {isDiscount && discountPercent && (
          <Badge variant="destructive">-{discountPercent}%</Badge>
        )}
      </div>
    </div>
  );
};

export default ProductGallery;
