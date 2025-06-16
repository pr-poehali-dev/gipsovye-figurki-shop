import ProductCard from "./ProductCard";

const ProductShowcase = () => {
  const products = [
    {
      title: "Античная Венера",
      price: 2500,
      originalPrice: 3300,
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
      category: "Античность",
      rating: 5,
    },
    {
      title: "Ангел-хранитель",
      price: 1800,
      image:
        "https://images.unsplash.com/photo-1578662996546-f28cfe02e89e?w=400&h=400&fit=crop",
      category: "Религиозные",
      rating: 5,
    },
    {
      title: "Римский воин",
      price: 3200,
      image:
        "https://images.unsplash.com/photo-1594736797933-d0d7c2b12cef?w=400&h=400&fit=crop",
      category: "Античность",
      rating: 4,
    },
    {
      title: "Балерина",
      price: 2100,
      originalPrice: 2800,
      image:
        "https://images.unsplash.com/photo-1594736797746-95a0b49c4e4e?w=400&h=400&fit=crop",
      category: "Современные",
      rating: 5,
    },
    {
      title: "Лев гордый",
      price: 2800,
      image:
        "https://images.unsplash.com/photo-1578662996956-12b60103fc96?w=400&h=400&fit=crop",
      category: "Животные",
      rating: 4,
    },
    {
      title: "Бюст Давида",
      price: 4500,
      image:
        "https://images.unsplash.com/photo-1578662997082-48f60103fc96?w=400&h=400&fit=crop",
      category: "Ренессанс",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Популярные
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {" "}
              Фигурки
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Каждая фигурка создана с любовью и вниманием к деталям
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all hover:scale-105">
            Смотреть все товары
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
