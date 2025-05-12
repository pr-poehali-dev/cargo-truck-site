
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FilterParams } from '@/types/catalog';
import { CategoryType, BrandType } from '@/types/truck';

interface FilterSidebarProps {
  filters: FilterParams;
  onFilterChange: (key: keyof FilterParams, value: any) => void;
  onResetFilters: () => void;
  categories: CategoryType[];
  brands: BrandType[];
  minAvailablePrice: number;
  maxAvailablePrice: number;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  filters,
  onFilterChange,
  onResetFilters,
  categories,
  brands,
  minAvailablePrice,
  maxAvailablePrice
}) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency', 
      currency: 'RUB',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="lg:w-1/4 space-y-6">
      <div className="bg-card rounded-lg border p-4">
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Поиск</h3>
          <div className="relative">
            <Input
              placeholder="Поиск по названию"
              value={filters.search || ''}
              onChange={(e) => onFilterChange('search', e.target.value)}
              className="pr-10"
            />
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute right-0 top-0"
              onClick={() => onFilterChange('search', '')}
              disabled={!filters.search}
            >
              <Icon name={filters.search ? "X" : "Search"} className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <Accordion type="multiple" defaultValue={["category", "brand", "price", "options"]}>
          <AccordionItem value="category">
            <AccordionTrigger>Категория</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                {categories.map((category) => (
                  <div key={category.id} className="flex items-center">
                    <Checkbox 
                      id={`category-${category.id}`}
                      checked={filters.category === category.name}
                      onCheckedChange={(checked) => 
                        onFilterChange('category', checked ? category.name : '')
                      }
                    />
                    <label 
                      htmlFor={`category-${category.id}`}
                      className="ml-2 text-sm cursor-pointer flex-1"
                    >
                      {category.name}
                    </label>
                    <span className="text-xs text-muted-foreground">({category.count})</span>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="brand">
            <AccordionTrigger>Марка</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                {brands.map((brand) => (
                  <div key={brand.id} className="flex items-center">
                    <Checkbox 
                      id={`brand-${brand.id}`}
                      checked={filters.brand === brand.name}
                      onCheckedChange={(checked) => 
                        onFilterChange('brand', checked ? brand.name : '')
                      }
                    />
                    <label 
                      htmlFor={`brand-${brand.id}`}
                      className="ml-2 text-sm cursor-pointer flex-1"
                    >
                      {brand.name}
                    </label>
                    <span className="text-xs text-muted-foreground">({brand.count})</span>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="price">
            <AccordionTrigger>Цена</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <div>
                  <label className="text-sm mb-1 block">От</label>
                  <Input
                    type="number"
                    placeholder={formatPrice(minAvailablePrice)}
                    value={filters.minPrice || ''}
                    onChange={(e) => onFilterChange('minPrice', e.target.value ? Number(e.target.value) : undefined)}
                    min={minAvailablePrice}
                    max={maxAvailablePrice}
                  />
                </div>
                <div>
                  <label className="text-sm mb-1 block">До</label>
                  <Input
                    type="number"
                    placeholder={formatPrice(maxAvailablePrice)}
                    value={filters.maxPrice || ''}
                    onChange={(e) => onFilterChange('maxPrice', e.target.value ? Number(e.target.value) : undefined)}
                    min={minAvailablePrice}
                    max={maxAvailablePrice}
                  />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="options">
            <AccordionTrigger>Дополнительно</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Checkbox 
                    id="in-stock"
                    checked={filters.inStock}
                    onCheckedChange={(checked) => 
                      onFilterChange('inStock', checked ? true : false)
                    }
                  />
                  <label htmlFor="in-stock" className="ml-2 text-sm cursor-pointer">
                    В наличии
                  </label>
                </div>
                <div className="flex items-center">
                  <Checkbox 
                    id="is-new"
                    checked={filters.isNew}
                    onCheckedChange={(checked) => 
                      onFilterChange('isNew', checked ? true : false)
                    }
                  />
                  <label htmlFor="is-new" className="ml-2 text-sm cursor-pointer">
                    Новинки
                  </label>
                </div>
                <div className="flex items-center">
                  <Checkbox 
                    id="is-discount"
                    checked={filters.isDiscount}
                    onCheckedChange={(checked) => 
                      onFilterChange('isDiscount', checked ? true : false)
                    }
                  />
                  <label htmlFor="is-discount" className="ml-2 text-sm cursor-pointer">
                    Со скидкой
                  </label>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        
        <div className="mt-6">
          <Button variant="outline" className="w-full" onClick={onResetFilters}>
            Сбросить фильтры
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
