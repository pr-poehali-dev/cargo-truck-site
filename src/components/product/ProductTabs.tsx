
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { TruckType } from '@/types/truck';
import Icon from '@/components/ui/icon';

interface ProductTabsProps {
  product: TruckType;
}

/**
 * Компонент с вкладками описания, характеристик и комплектации
 */
const ProductTabs = ({ product }: ProductTabsProps) => {
  return (
    <Tabs defaultValue="description" className="mb-12">
      <TabsList>
        <TabsTrigger value="description">Описание</TabsTrigger>
        <TabsTrigger value="specifications">Характеристики</TabsTrigger>
        <TabsTrigger value="features">Комплектация</TabsTrigger>
      </TabsList>
      
      <TabsContent value="description" className="mt-6">
        <div className="prose max-w-none">
          <p className="text-lg">{product.description}</p>
        </div>
      </TabsContent>
      
      <TabsContent value="specifications" className="mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Основные характеристики</h3>
            <div className="space-y-2">
              <div className="flex justify-between py-2 border-b">
                <span className="text-muted-foreground">Марка и модель</span>
                <span className="font-medium">{product.title}</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-muted-foreground">Год выпуска</span>
                <span className="font-medium">{product.year}</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-muted-foreground">Пробег</span>
                <span className="font-medium">{product.mileage.toLocaleString()} км</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-muted-foreground">Состояние</span>
                <span className="font-medium">{product.condition}</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-muted-foreground">Цвет</span>
                <span className="font-medium">{product.color}</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-muted-foreground">Категория</span>
                <span className="font-medium">{product.category}</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Технические характеристики</h3>
            <div className="space-y-2">
              <div className="flex justify-between py-2 border-b">
                <span className="text-muted-foreground">Двигатель</span>
                <span className="font-medium">{product.engine}</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-muted-foreground">Мощность</span>
                <span className="font-medium">{product.power}</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-muted-foreground">Трансмиссия</span>
                <span className="font-medium">{product.transmission}</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-muted-foreground">Колесная формула</span>
                <span className="font-medium">{product.wheelFormula}</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-muted-foreground">Тип кабины</span>
                <span className="font-medium">{product.cabinType}</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-muted-foreground">Грузоподъемность</span>
                <span className="font-medium">{product.loadCapacity}</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-muted-foreground">Количество осей</span>
                <span className="font-medium">{product.axles}</span>
              </div>
            </div>
          </div>
        </div>
      </TabsContent>
      
      <TabsContent value="features" className="mt-6">
        <div className="space-y-6">
          <h3 className="text-lg font-semibold">Комплектация и опции</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {product.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <Icon name="Check" className="h-5 w-5 text-primary shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default ProductTabs;
