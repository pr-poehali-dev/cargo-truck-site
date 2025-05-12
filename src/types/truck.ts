
export interface TruckType {
  id: string;
  title: string;
  image: string;
  price: number;
  oldPrice?: number;
  category: string;
  description: string;
  isNew?: boolean;
  isDiscount?: boolean;
  discountPercent?: number;
  year: number;
  mileage: number;
  engine: string;
  power: string;
  transmission: string;
  wheelFormula: string;
  cabinType: string;
  loadCapacity: string;
  axles: number;
  color: string;
  condition: string;
  inStock: boolean;
  tags: string[];
  features: string[];
}

export interface CategoryType {
  id: string;
  name: string;
  count: number;
}

export interface BrandType {
  id: string;
  name: string;
  count: number;
}
