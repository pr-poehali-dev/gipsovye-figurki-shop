import Icon from "@/components/ui/icon";

const Categories = () => {
  const categories = [
    {
      title: "Античность",
      description: "Классические статуи и бюсты",
      icon: "Crown",
      color: "from-purple-500 to-pink-500",
      count: 150,
    },
    {
      title: "Религиозные",
      description: "Ангелы, святые, иконы",
      icon: "Star",
      color: "from-blue-500 to-cyan-500",
      count: 89,
    },
    {
      title: "Животные",
      description: "Фигурки животных и птиц",
      icon: "Heart",
      color: "from-green-500 to-emerald-500",
      count: 127,
    },
    {
      title: "Современные",
      description: "Абстракция и модерн",
      icon: "Sparkles",
      color: "from-orange-500 to-red-500",
      count: 76,
    },
    {
      title: "Декоративные",
      description: "Вазы, подсвечники, украшения",
      icon: "Gem",
      color: "from-violet-500 to-purple-500",
      count: 143,
    },
    {
      title: "На заказ",
      description: "Индивидуальное изготовление",
      icon: "Palette",
      color: "from-pink-500 to-rose-500",
      count: 25,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Наши
            <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              {" "}
              Категории
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Широкий выбор гипсовых изделий для любого интерьера и вкуса
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden cursor-pointer"
            >
              <div
                className={`h-32 bg-gradient-to-br ${category.color} p-6 relative overflow-hidden`}
              >
                <div className="absolute top-4 right-4 text-white/30">
                  <Icon name={category.icon as any} size={48} />
                </div>
                <div className="absolute bottom-4 left-6">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <Icon
                      name={category.icon as any}
                      size={24}
                      className="text-white"
                    />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-800">
                    {category.title}
                  </h3>
                  <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
                    {category.count}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <button className="text-primary font-semibold hover:text-accent transition-colors group-hover:translate-x-1 transform duration-200">
                  Смотреть все →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
