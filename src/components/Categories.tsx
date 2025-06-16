import Icon from "@/components/ui/icon";

const Categories = () => {
  const categories = [
    {
      title: "Гостиная",
      description: "Элегантные акценты для главной комнаты",
      icon: "Sofa",
      color: "from-amber-500 to-orange-500",
      count: 120,
    },
    {
      title: "Спальня",
      description: "Умиротворяющие композиции для отдыха",
      icon: "Moon",
      color: "from-indigo-500 to-purple-500",
      count: 85,
    },
    {
      title: "Кабинет",
      description: "Вдохновляющие решения для работы",
      icon: "BookOpen",
      color: "from-emerald-500 to-teal-500",
      count: 67,
    },
    {
      title: "Классический",
      description: "Античные формы и традиции",
      icon: "Crown",
      color: "from-purple-500 to-pink-500",
      count: 150,
    },
    {
      title: "Современный",
      description: "Минимализм и чистые линии",
      icon: "Sparkles",
      color: "from-slate-500 to-gray-500",
      count: 98,
    },
    {
      title: "Скандинавский",
      description: "Уют и природная гармония",
      icon: "Trees",
      color: "from-blue-500 to-cyan-500",
      count: 76,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Для каждого
            <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              {" "}
              Пространства
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Подберите идеальные фигуры для вашего стиля и комнаты
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
