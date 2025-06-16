import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] gradient-bg flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 animate-bounce">
          <Icon name="Star" size={40} className="text-white" />
        </div>
        <div className="absolute top-32 right-20 animate-pulse">
          <Icon name="Heart" size={32} className="text-white" />
        </div>
        <div className="absolute bottom-20 left-32 animate-bounce delay-150">
          <Icon name="Sparkles" size={36} className="text-white" />
        </div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          Преобразите
          <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-red-50">
            Ваш Дом
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in">
          Изысканные гипсовые фигуры создают неповторимую атмосферу в каждой
          комнате
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <button className="bg-white text-gray-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-xl">
            Подобрать для дома
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-gray-800 transition-all hover:scale-105">
            Галерея интерьеров
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 max-w-md mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-white">500+</div>
            <div className="text-white/80 text-sm">Интерьеров</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">8</div>
            <div className="text-white/80 text-sm">Стилей</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">95%</div>
            <div className="text-white/80 text-sm">Довольных</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
