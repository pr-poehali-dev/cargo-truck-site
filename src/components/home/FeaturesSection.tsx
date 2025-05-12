
import FeatureCard from './FeatureCard';

const FeaturesSection = () => {
  const features = [
    {
      icon: "Truck",
      title: "Большой выбор",
      description: "Более 500 единиц техники различных марок и моделей"
    },
    {
      icon: "BadgeCheck",
      title: "Гарантия качества",
      description: "Полная предпродажная проверка и подготовка техники"
    },
    {
      icon: "Wrench",
      title: "Сервисное обслуживание",
      description: "Собственный сервисный центр и оригинальные запчасти"
    },
    {
      icon: "CreditCard",
      title: "Удобная оплата",
      description: "Лизинг, кредит, рассрочка и другие финансовые программы"
    }
  ];

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
