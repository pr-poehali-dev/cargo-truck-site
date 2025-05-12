
const BrandsSection = () => {
  const brands = ['КАМАЗ', 'MAN', 'Volvo', 'Scania', 'Mercedes-Benz', 'DAF', 'Isuzu', 'ГАЗ'];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center font-playfair">Популярные бренды</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {brands.map((brand, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-gray">{brand}</span>
              </div>
              <span className="text-center">{brand}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
