import Icon from "@/components/ui/icon";

interface ProductCardProps {
  title: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
}

const ProductCard = ({
  title,
  price,
  originalPrice,
  image,
  category,
  rating,
}: ProductCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg card-hover overflow-hidden group">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {originalPrice && (
          <div className="absolute top-4 left-4 bg-secondary text-white px-3 py-1 rounded-full text-sm font-semibold">
            -25%
          </div>
        )}
        <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
          <Icon
            name="Heart"
            size={20}
            className="text-gray-600 hover:text-red-500"
          />
        </button>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="text-sm text-primary font-medium mb-2">{category}</div>
        <h3 className="text-lg font-semibold text-gray-800 mb-3 line-clamp-2">
          {title}
        </h3>

        {/* Rating */}
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <Icon
              key={i}
              name="Star"
              size={16}
              className={
                i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
              }
            />
          ))}
          <span className="text-sm text-gray-600 ml-2">({rating}.0)</span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gray-800">
              {price.toLocaleString()}₽
            </span>
            {originalPrice && (
              <span className="text-lg text-gray-400 line-through">
                {originalPrice.toLocaleString()}₽
              </span>
            )}
          </div>
        </div>

        {/* Add to Cart Button */}
        <button className="w-full bg-gradient-to-r from-primary to-accent text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all hover:scale-[1.02] active:scale-95">
          В корзину
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
