
import { useState, useEffect } from 'react';
import { trucks } from '@/data/trucks';
import { TruckType } from '@/types/truck';

/**
 * Хук для получения информации о продукте и связанных продуктах
 * @param id - ID продукта
 */
export const useProduct = (id: string | undefined) => {
  const [product, setProduct] = useState<TruckType | null>(null);
  const [similarProducts, setSimilarProducts] = useState<TruckType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Имитация загрузки данных с сервера
    const loadProduct = () => {
      setIsLoading(true);
      
      setTimeout(() => {
        if (!id) {
          setProduct(null);
          setSimilarProducts([]);
          setIsLoading(false);
          return;
        }
        
        const foundProduct = trucks.find(truck => truck.id === id) || null;
        setProduct(foundProduct);
        
        if (foundProduct) {
          const relatedProducts = trucks
            .filter(truck => truck.category === foundProduct.category && truck.id !== foundProduct.id)
            .slice(0, 4);
          setSimilarProducts(relatedProducts);
        } else {
          setSimilarProducts([]);
        }
        
        setIsLoading(false);
      }, 300); // Небольшая задержка для имитации сетевого запроса
    };
    
    loadProduct();
  }, [id]);
  
  return { product, similarProducts, isLoading };
};
