import React, { useState, useCallback } from "react";
import type { Product, CartItem } from "./types";
import { products } from "./data/products";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleAddToCart = useCallback((product: Product, quantity: number) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.product.id === product.id);

      if (existingItem) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prev, { product, quantity }];
      }
    });
  }, []);

  const handleUpdateQuantity = useCallback(
    (productId: number, quantity: number) => {
      setCartItems((prev) =>
        prev
          .map((item) =>
            item.product.id === productId ? { ...item, quantity } : item
          )
          .filter((item) => item.quantity > 0)
      );
    },
    []
  );

  const handleRemoveItem = useCallback((productId: number) => {
    setCartItems((prev) =>
      prev.filter((item) => item.product.id !== productId)
    );
  }, []);

  const handleThemeToggle = useCallback((isDark: boolean) => {
    setIsDarkMode(isDark);
  }, []);

  return (
    <div
      className={`min-h-screen transition-all duration-300 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <Header
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onThemeToggle={handleThemeToggle}
      />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Welcome to <span className="text-blue-500">ShopHub</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover amazing products with the best prices. Built with React
            TypeScript and custom hooks!
          </p>
        </section>

        {/* Products Grid */}
        <section>
          <h3 className="text-2xl font-bold mb-6 text-center">
            Featured Products
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div
              className={`p-6 rounded-xl ${
                isDarkMode ? "bg-gray-800" : "bg-white shadow-lg"
              }`}
            >
              <div className="text-3xl mb-2">🚀</div>
              <h4 className="font-bold text-lg mb-2">Fast Delivery</h4>
              <p className="text-gray-600">Free shipping on orders over $50</p>
            </div>
            <div
              className={`p-6 rounded-xl ${
                isDarkMode ? "bg-gray-800" : "bg-white shadow-lg"
              }`}
            >
              <div className="text-3xl mb-2">💎</div>
              <h4 className="font-bold text-lg mb-2">Premium Quality</h4>
              <p className="text-gray-600">30-day money-back guarantee</p>
            </div>
            <div
              className={`p-6 rounded-xl ${
                isDarkMode ? "bg-gray-800" : "bg-white shadow-lg"
              }`}
            >
              <div className="text-3xl mb-2">🔒</div>
              <h4 className="font-bold text-lg mb-2">Secure Payment</h4>
              <p className="text-gray-600">Your data is always protected</p>
            </div>
          </div>
        </section>
      </main>

      <footer
        className={`border-t ${
          isDarkMode
            ? "border-gray-700 bg-gray-800"
            : "border-gray-200 bg-white"
        } py-8 mt-16`}
      >
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">
            Built with ❤️ using React, TypeScript, and custom hooks
          </p>
          <p className="text-gray-500 text-sm mt-2">
            useCounter & useToggle Demo Project
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
