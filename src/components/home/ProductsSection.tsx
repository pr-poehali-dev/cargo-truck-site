
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ui/product-card';
import { TruckType } from '@/data/trucks';

interface ProductsSectionProps {
  title: string;
  trucks: TruckType[];
  linkText: string;
  linkTo: string;
}

const ProductsSection = ({ title, trucks, linkText, linkTo }: ProductsSectionProps) => {
  if (trucks.length === 0) return null;
  
  return (
    <section className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold font-playfair">{title}</h2>
          <Button variant="outline" asChild>
            <Link to={linkTo}>{linkText}</Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trucks.map(truck => (
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
  );
};

export default ProductsSection;
