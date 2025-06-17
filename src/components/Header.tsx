import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 gradient-bg rounded-full flex items-center justify-center">
              <Icon name="Sparkles" size={24} className="text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-amber-500">
              ГипсИнтерьер
            </h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              По комнатам
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Стили интерьера
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Коллекции
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Галерея интерьеров
            </a>
          </nav>

          {/* Cart */}
          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-gray-700 hover:text-primary transition-colors">
              <Icon name="ShoppingCart" size={24} />
              <span className="absolute -top-1 -right-1 bg-secondary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </button>
            <button className="md:hidden p-2 text-gray-700">
              <Icon name="Menu" size={24} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
