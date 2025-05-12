
import React from 'react';
import ProductCard from '@/components/ui/product-card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { TruckType } from '@/types/truck';

interface ProductGridProps {
  products: TruckType[];
  onResetFilters: () => void;
}

const EmptyState = ({ onResetFilters }: { onResetFilters: () => void }) => (
  <div className="text-center py-16">
    <Icon name="Search" className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
    <h3 className="text-xl font-semibold mb-2">Ничего не найдено</h3>
    <p className="text-muted-foreground mb-6">
      По вашему запросу не найдено подходящих товаров.
      <br />Попробуйте изменить параметры поиска.
    </p>
    <Button onClick={onResetFilters}>Сбросить фильтры</Button>
  </div>
);

const ProductGrid: React.FC<ProductGridProps> = ({ products, onResetFilters }) => {
  if (products.length === 0) {
    return <EmptyState onResetFilters={onResetFilters} />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
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
  );
};

export default ProductGrid;
