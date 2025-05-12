
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { trucks } from "@/data/trucks";

// Home page components
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import ProductsSection from "@/components/home/ProductsSection";
import ContactSection from "@/components/home/ContactSection";
import BrandsSection from "@/components/home/BrandsSection";

/**
 * HomePage - главная страница сайта продажи грузовых автомобилей
 * Включает разделы: hero, features, новинки, контакты, специальные предложения, бренды
 */
const HomePage = () => {
  const latestTrucks = trucks.slice(0, 4);
  const discountTrucks = trucks.filter((truck) => truck.isDiscount).slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <HeroSection />
      <FeaturesSection />

      <ProductsSection
        title="Новые поступления"
        trucks={latestTrucks}
        linkText="Смотреть все"
        linkTo="/catalog"
      />

      <ContactSection />

      {discountTrucks.length > 0 && (
        <ProductsSection
          title="Специальные предложения"
          trucks={discountTrucks}
          linkText="Все акции"
          linkTo="/catalog?discount=true"
        />
      )}

      <BrandsSection />

      <Footer />
    </div>
  );
};

export default HomePage;
