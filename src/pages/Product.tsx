
import React from 'react';
import { useParams } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Импорт компонентов продукта
import ProductBreadcrumbs from '@/components/product/ProductBreadcrumbs';
import ProductGallery from '@/components/product/ProductGallery';
import ProductHeader from '@/components/product/ProductHeader';
import ProductSpecs from '@/components/product/ProductSpecs';
import ProductPrice from '@/components/product/ProductPrice';
import PurchaseTerms from '@/components/product/PurchaseTerms';
import ProductTabs from '@/components/product/ProductTabs';
import RelatedProducts from '@/components/product/RelatedProducts';
import ProductNotFound from '@/components/product/ProductNotFound';

// Импорт хука
import { useProduct } from '@/hooks/useProduct';

/**
 * Страница детальной информации о продукте
 */
const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { product, similarProducts, isLoading } = useProduct(id);
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <p>Загрузка...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <ProductNotFound />
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          {/* Хлебные крошки */}
          <ProductBreadcrumbs 
            productId={product.id} 
            title={product.title} 
            category={product.category} 
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Галерея изображений продукта */}
            <ProductGallery 
              image={product.image} 
              title={product.title}
              isNew={product.isNew}
              isDiscount={product.isDiscount}
              discountPercent={product.discountPercent}
            />
            
            {/* Информация о продукте */}
            <div>
              {/* Заголовок продукта */}
              <ProductHeader 
                title={product.title} 
                category={product.category} 
                id={product.id} 
              />
              
              {/* Основные характеристики */}
              <ProductSpecs 
                year={product.year}
                mileage={product.mileage}
                engine={product.engine}
                wheelFormula={product.wheelFormula}
                loadCapacity={product.loadCapacity}
                color={product.color}
              />
              
              <Separator className="my-6" />
              
              {/* Цена и кнопки действий */}
              <ProductPrice 
                price={product.price}
                oldPrice={product.oldPrice}
                inStock={product.inStock}
              />
              
              {/* Условия покупки */}
              <PurchaseTerms />
            </div>
          </div>
          
          {/* Табы с подробной информацией о продукте */}
          <ProductTabs product={product} />
          
          {/* Похожие продукты */}
          <RelatedProducts products={similarProducts} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductPage;
