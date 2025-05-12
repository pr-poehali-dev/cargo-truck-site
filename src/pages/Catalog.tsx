
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { trucks, categories, brands } from '@/data/trucks';
import { useFilters } from '@/hooks/useFilters';

// Catalog Components
import FilterSidebar from '@/components/catalog/FilterSidebar';
import SortBar from '@/components/catalog/SortBar';
import ProductGrid from '@/components/catalog/ProductGrid';

/**
 * CatalogPage - Страница каталога грузовых автомобилей с фильтрацией и сортировкой
 * 
 * Функционал:
 * - Фильтрация по категориям, брендам, цене и другим параметрам
 * - Сортировка по различным критериям
 * - Отображение списка товаров с возможностью просмотра деталей
 * - Синхронизация параметров фильтрации с URL для сохранения состояния
 */
const CatalogPage: React.FC = () => {
  const {
    filters,
    filteredTrucks,
    handleFilterChange,
    resetFilters,
    minAvailablePrice,
    maxAvailablePrice
  } = useFilters(trucks);

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
            <FilterSidebar 
              filters={filters}
              onFilterChange={handleFilterChange}
              onResetFilters={resetFilters}
              categories={categories}
              brands={brands}
              minAvailablePrice={minAvailablePrice}
              maxAvailablePrice={maxAvailablePrice}
            />
            
            {/* Products Section */}
            <div className="lg:w-3/4">
              <SortBar 
                sortValue={filters.sort || 'popular'} 
                onSortChange={(value) => handleFilterChange('sort', value)} 
              />
              
              <ProductGrid 
                products={filteredTrucks} 
                onResetFilters={resetFilters} 
              />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CatalogPage;
