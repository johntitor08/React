import React from "react";
import type { CartItem } from "../types";
import ShoppingCart from "./ShoppingCart";
import DarkModeToggle from "./DarkModeToggle";

interface HeaderProps {
  cartItems: CartItem[];
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onRemoveItem: (productId: number) => void;
  onThemeToggle: (isDark: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onThemeToggle,
}) => {
  return (
    <header className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-30">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              🛍️
            </div>
            <h1 className="text-2xl font-bold text-gray-800">ShopHub</h1>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <DarkModeToggle onToggle={onThemeToggle} />
            <ShoppingCart
              cartItems={cartItems}
              onUpdateQuantity={onUpdateQuantity}
              onRemoveItem={onRemoveItem}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
