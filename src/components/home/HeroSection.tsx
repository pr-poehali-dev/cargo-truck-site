
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const HeroSection = () => {
  return (
    <section className="relative h-[85vh] flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2000')" 
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-xl space-y-6 animate-fade-in">
          <Badge className="bg-primary/80 hover:bg-primary">Лидер рынка с 2005 года</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-playfair">
            Надежные грузовые автомобили для вашего бизнеса
          </h1>
          <p className="text-xl text-white/80">
            Широкий выбор новой и подержанной грузовой техники от ведущих мировых производителей
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <Link to="/catalog">Смотреть каталог</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              <Link to="/contact">Связаться с нами</Link>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent h-24" />
    </section>
  );
};

export default HeroSection;
