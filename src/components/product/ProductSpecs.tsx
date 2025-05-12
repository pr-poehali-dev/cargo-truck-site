
import Icon from '@/components/ui/icon';

interface ProductSpecsProps {
  year: number;
  mileage: number;
  engine: string;
  wheelFormula: string;
  loadCapacity: string;
  color: string;
}

/**
 * Компонент с основными характеристиками продукта
 */
const ProductSpecs = ({ 
  year, 
  mileage, 
  engine, 
  wheelFormula, 
  loadCapacity, 
  color 
}: ProductSpecsProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
      <div className="flex items-center gap-2">
        <Icon name="Calendar" className="h-5 w-5 text-primary" />
        <span>{year} г.</span>
      </div>
      <div className="flex items-center gap-2">
        <Icon name="Activity" className="h-5 w-5 text-primary" />
        <span>{mileage.toLocaleString()} км</span>
      </div>
      <div className="flex items-center gap-2">
        <Icon name="Gauge" className="h-5 w-5 text-primary" />
        <span>{engine}</span>
      </div>
      <div className="flex items-center gap-2">
        <Icon name="Truck" className="h-5 w-5 text-primary" />
        <span>{wheelFormula}</span>
      </div>
      <div className="flex items-center gap-2">
        <Icon name="Weight" className="h-5 w-5 text-primary" />
        <span>{loadCapacity}</span>
      </div>
      <div className="flex items-center gap-2">
        <Icon name="PaintBucket" className="h-5 w-5 text-primary" />
        <span>{color}</span>
      </div>
    </div>
  );
};

export default ProductSpecs;
