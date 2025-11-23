import React from "react";
import type { Product } from "../types";
import useCounter from "../hooks/useCounter";
import useToggle from "../hooks/useToggle";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, quantity: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const quantityCounter = useCounter(1, { min: 1, max: 10 });
  const wishlistToggle = useToggle(false);
  const quickViewToggle = useToggle(false);

  const handleAddToCart = () => {
    onAddToCart(product, quantityCounter.count);
    quantityCounter.reset();
  };

  const renderStars = (rating: number) => {
    return "★".repeat(Math.floor(rating)) + "☆".repeat(5 - Math.floor(rating));
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200">
      {/* Product Image */}
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover cursor-pointer"
          onClick={quickViewToggle.setTrue}
        />

        {/* Wishlist Button */}
        <button
          onClick={wishlistToggle.toggle}
          className={`absolute top-3 right-3 p-2 rounded-full transition-all duration-300 ${
            wishlistToggle.value
              ? "bg-red-500 text-white"
              : "bg-white text-gray-400 hover:bg-gray-100"
          }`}
        >
          {wishlistToggle.value ? "❤️" : "🤍"}
        </button>

        {/* Category Badge */}
        <span className="absolute top-3 left-3 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
          {product.category}
        </span>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2 text-gray-800">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center mb-3">
          <span className="text-yellow-400 mr-2">
            {renderStars(product.rating)}
          </span>
          <span className="text-gray-500 text-sm">({product.rating})</span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-green-600">
            ${product.price}
          </span>
        </div>

        {/* Quantity Selector and Add to Cart */}
        <div className="flex items-center justify-between space-x-2">
          {/* Quantity Counter */}
          <div className="flex items-center space-x-2">
            <button
              onClick={quantityCounter.decrement}
              disabled={quantityCounter.isAtMin}
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                quantityCounter.isAtMin
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              -
            </button>
            <span className="font-semibold text-gray-700 min-w-8 text-center">
              {quantityCounter.count}
            </span>
            <button
              onClick={quantityCounter.increment}
              disabled={quantityCounter.isAtMax}
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                quantityCounter.isAtMax
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              +
            </button>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
          >
            🛒 Add to Cart
          </button>
        </div>
      </div>

      {/* Quick View Modal */}
      {quickViewToggle.value && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6 relative">
            <button
              onClick={quickViewToggle.setFalse}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
            >
              ×
            </button>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-green-600">
                ${product.price}
              </span>
              <button
                onClick={handleAddToCart}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
