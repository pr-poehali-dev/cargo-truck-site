
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FilterParams } from '@/types/catalog';
import { TruckType } from '@/types/truck';

export const useFilters = (allTrucks: TruckType[]) => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  
  const [filteredTrucks, setFilteredTrucks] = useState<TruckType[]>(allTrucks);
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
  
  const minAvailablePrice = Math.min(...allTrucks.map(truck => truck.price));
  const maxAvailablePrice = Math.max(...allTrucks.map(truck => truck.price));
  
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
    let result = [...allTrucks];
    
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
  }, [filters, allTrucks]);
  
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

  return {
    filters,
    filteredTrucks,
    handleFilterChange,
    resetFilters,
    minAvailablePrice,
    maxAvailablePrice
  };
};
