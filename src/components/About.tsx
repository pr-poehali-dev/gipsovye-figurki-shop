import Icon from "@/components/ui/icon";

const About = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Искусство в
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {" "}
                Интерьере
              </span>
            </h2>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Уже 15 лет мы помогаем создавать неповторимые интерьеры. Наши
              гипсовые фигуры — это не просто декор, а художественные акценты,
              которые преображают пространство и создают особую атмосферу в
              доме.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="Palette" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Консультация дизайнера
                  </h3>
                  <p className="text-gray-600">
                    Поможем подобрать фигуры под ваш стиль интерьера и цветовую
                    гамму
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="Ruler" size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Идеальные пропорции
                  </h3>
                  <p className="text-gray-600">
                    Учитываем размеры помещения для гармоничного размещения
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="Home" size={24} className="text-secondary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Установка на дому
                  </h3>
                  <p className="text-gray-600">
                    Профессиональная установка и размещение в интерьере
                  </p>
                </div>
              </div>
            </div>

            <button className="from-primary to-accent px-8 py-4 font-semibold hover:shadow-xl transition-all hover:scale-105 text-[#ffffff] text-lg rounded-0 bg-[#ffffff]"></button>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl transform rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1578671296114-c5c3f9bc8b6e?w=600&h=700&fit=crop"
                alt="Мастерская гипсовых фигурок"
                className="relative rounded-3xl shadow-2xl w-full"
              />

              {/* Floating stats */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6">
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-gray-600">лет опыта</div>
              </div>

              <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-6">
                <div className="text-3xl font-bold text-accent">5000+</div>
                <div className="text-gray-600">изделий</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
