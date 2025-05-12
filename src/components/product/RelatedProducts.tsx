
import ProductCard from '@/components/ui/product-card';
import { TruckType } from '@/types/truck';

interface RelatedProductsProps {
  products: TruckType[];
}

/**
 * Компонент для отображения похожих продуктов
 */
const RelatedProducts = ({ products }: RelatedProductsProps) => {
  if (products.length === 0) return null;
  
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6 font-playfair">Похожие предложения</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map(truck => (
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
  );
};

export default RelatedProducts;
