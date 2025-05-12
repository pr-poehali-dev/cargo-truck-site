
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/components/ui/product-card';
import { trucks, categories, brands } from '@/data/trucks';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Icon from '@/components/ui/icon';

interface FilterParams {
  search?: string;
  category?: string;
  brand?: string;
  minPrice?: number;
  maxPrice?: number;
  sort?: string;
  inStock?: boolean;
  isNew?: boolean;
  isDiscount?: boolean;
}

const CatalogPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  
  const [filteredTrucks, setFilteredTrucks] = useState(trucks);
  const [filters, setFilters] = useState<FilterParams>({
    search: searchParams.get('search') || '',
    category: searchParams.get('category') || '',
    brand: searchParams.get('brand') || '',
    minPrice: searchParams.get('minPrice') ? Number(searchParams.get('minPrice')) : undefined,
    maxPrice: searchParams.get('maxPrice') ? Number(searchParams.get('maxPrice')) : undefined,
    sort: searchParams.get('sort') || 'popular',
    inStock: searchParams.get('inStock') === 'true',
    isNew: searchParams.get('isNew') === 'true',
    isDiscount: searchParams.get('isDiscount') === 'true',
  });
  
  const minAvailablePrice = Math.min(...trucks.map(truck => truck.price));
  const maxAvailablePrice = Math.max(...trucks.map(truck => truck.price));
  
  // Update URL with filters
  useEffect(() => {
    const params = new URLSearchParams();
    
    if (filters.search) params.set('search', filters.search);
    if (filters.category) params.set('category', filters.category);
    if (filters.brand) params.set('brand', filters.brand);
    if (filters.minPrice) params.set('minPrice', filters.minPrice.toString());
    if (filters.maxPrice) params.set('maxPrice', filters.maxPrice.toString());
    if (filters.sort) params.set('sort', filters.sort);
    if (filters.inStock) params.set('inStock', 'true');
    if (filters.isNew) params.set('isNew', 'true');
    if (filters.isDiscount) params.set('isDiscount', 'true');
    
    navigate(`${location.pathname}?${params.toString()}`, { replace: true });
  }, [filters, navigate, location.pathname]);
  
  // Apply filters
  useEffect(() => {
    let result = [...trucks];
    
    // Filter by search term
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      result = result.filter(truck => 
        truck.title.toLowerCase().includes(searchLower) || 
        truck.description.toLowerCase().includes(searchLower) ||
        truck.category.toLowerCase().includes(searchLower)
      );
    }
    
    // Filter by category
    if (filters.category) {
      result = result.filter(truck => 
        truck.category.toLowerCase() === filters.category?.toLowerCase()
      );
    }
    
    // Filter by brand
    if (filters.brand) {
      result = result.filter(truck => 
        truck.title.toLowerCase().includes(filters.brand?.toLowerCase() || '')
      );
    }
    
    // Filter by price
    if (filters.minPrice) {
      result = result.filter(truck => truck.price >= (filters.minPrice || 0));
    }
    
    if (filters.maxPrice) {
      result = result.filter(truck => truck.price <= (filters.maxPrice || Infinity));
    }
    
    // Filter by availability
    if (filters.inStock) {
      result = result.filter(truck => truck.inStock);
    }
    
    // Filter by new
    if (filters.isNew) {
      result = result.filter(truck => truck.isNew);
    }
    
    // Filter by discount
    if (filters.isDiscount) {
      result = result.filter(truck => truck.isDiscount);
    }
    
    // Sort results
    if (filters.sort) {
      switch(filters.sort) {
        case 'price-asc':
          result.sort((a, b) => a.price - b.price);
          break;
        case 'price-desc':
          result.sort((a, b) => b.price - a.price);
          break;
        case 'name-asc':
          result.sort((a, b) => a.title.localeCompare(b.title));
          break;
        case 'name-desc':
          result.sort((a, b) => b.title.localeCompare(a.title));
          break;
        case 'new':
          result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
          break;
        default:
          // Default sort (popular - we'll use id for this demo)
          break;
      }
    }
    
    setFilteredTrucks(result);
  }, [filters]);
  
  const handleFilterChange = (key: keyof FilterParams, value: any) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };
  
  const resetFilters = () => {
    setFilters({
      search: '',
      category: '',
      brand: '',
      minPrice: undefined,
      maxPrice: undefined,
      sort: 'popular',
      inStock: false,
      isNew: false,
      isDiscount: false,
    });
  };
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency', 
      currency: 'RUB',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold font-playfair">Каталог грузовой техники</h1>
            <div className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground">
                Найдено: {filteredTrucks.length}
              </span>
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-1/4 space-y-6">
              <div className="bg-card rounded-lg border p-4">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2">Поиск</h3>
                  <div className="relative">
                    <Input
                      placeholder="Поиск по названию"
                      value={filters.search || ''}
                      onChange={(e) => handleFilterChange('search', e.target.value)}
                      className="pr-10"
                    />
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="absolute right-0 top-0"
                      onClick={() => handleFilterChange('search', '')}
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
                                handleFilterChange('category', checked ? category.name : '')
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
                                handleFilterChange('brand', checked ? brand.name : '')
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
                            onChange={(e) => handleFilterChange('minPrice', e.target.value ? Number(e.target.value) : undefined)}
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
                            onChange={(e) => handleFilterChange('maxPrice', e.target.value ? Number(e.target.value) : undefined)}
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
                              handleFilterChange('inStock', checked ? true : false)
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
                              handleFilterChange('isNew', checked ? true : false)
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
                              handleFilterChange('isDiscount', checked ? true : false)
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
                  <Button variant="outline" className="w-full" onClick={resetFilters}>
                    Сбросить фильтры
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Product Grid */}
            <div className="lg:w-3/4">
              <div className="bg-card rounded-lg border p-4 mb-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-medium">Сортировка</h3>
                  <Select
                    value={filters.sort || 'popular'}
                    onValueChange={(value) => handleFilterChange('sort', value)}
                  >
                    <SelectTrigger className="w-[200px]">
                      <SelectValue placeholder="Сортировка" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="popular">По популярности</SelectItem>
                      <SelectItem value="price-asc">По цене (сначала дешевле)</SelectItem>
                      <SelectItem value="price-desc">По цене (сначала дороже)</SelectItem>
                      <SelectItem value="name-asc">По названию (А-Я)</SelectItem>
                      <SelectItem value="name-desc">По названию (Я-А)</SelectItem>
                      <SelectItem value="new">Сначала новинки</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              {filteredTrucks.length === 0 ? (
                <div className="text-center py-16">
                  <Icon name="Search" className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Ничего не найдено</h3>
                  <p className="text-muted-foreground mb-6">
                    По вашему запросу не найдено подходящих товаров.
                    <br />Попробуйте изменить параметры поиска.
                  </p>
                  <Button onClick={resetFilters}>Сбросить фильтры</Button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredTrucks.map(truck => (
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
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CatalogPage;
