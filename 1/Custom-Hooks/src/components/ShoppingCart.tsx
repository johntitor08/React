import React from "react";
import type { CartItem } from "../types";
import useCounter from "../hooks/useCounter";
import useToggle from "../hooks/useToggle";

interface ShoppingCartProps {
  cartItems: CartItem[];
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onRemoveItem: (productId: number) => void;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
}) => {
  const cartToggle = useToggle(false);
  const couponToggle = useToggle(false);
  const couponInputCounter = useCounter(0, { min: 0, max: 100 });

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const tax = subtotal * 0.1;
  const discount = couponToggle.value ? subtotal * 0.1 : 0;
  const total = subtotal + tax - discount;

  const applyCoupon = () => {
    if (couponInputCounter.count === 10) {
      couponToggle.setTrue();
      alert("Coupon applied! 10% discount");
    } else {
      alert("Invalid coupon code. Try 10 for 10% discount");
    }
  };

  return (
    <div className="relative">
      {/* Cart Icon */}
      <button
        onClick={cartToggle.toggle}
        className="relative p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all duration-300"
      >
        🛒
        {cartItems.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
            {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
          </span>
        )}
      </button>

      {/* Cart Dropdown */}
      {cartToggle.value && (
        <div className="absolute right-0 top-12 w-96 bg-white rounded-xl shadow-2xl border border-gray-200 z-40">
          <div className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800">Shopping Cart</h2>
              <button
                onClick={cartToggle.setFalse}
                className="text-gray-500 hover:text-gray-700"
              >
                ×
              </button>
            </div>

            {/* Cart Items */}
            <div className="max-h-96 overflow-y-auto space-y-3 mb-4">
              {cartItems.length === 0 ? (
                <p className="text-gray-500 text-center py-8">
                  Your cart is empty
                </p>
              ) : (
                cartItems.map((item) => (
                  <CartItemRow
                    key={item.product.id}
                    item={item}
                    onUpdateQuantity={onUpdateQuantity}
                    onRemoveItem={onRemoveItem}
                  />
                ))
              )}
            </div>

            {/* Coupon Section */}
            {cartItems.length > 0 && (
              <div className="border-t border-gray-200 pt-4 mb-4">
                <div className="flex space-x-2 mb-4">
                  <input
                    type="number"
                    value={couponInputCounter.count}
                    onChange={(e) =>
                      couponInputCounter.setCount(Number(e.target.value))
                    }
                    placeholder="Enter coupon code"
                    className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
                  />
                  <button
                    onClick={applyCoupon}
                    disabled={couponToggle.value}
                    className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                      couponToggle.value
                        ? "bg-green-500 text-white cursor-not-allowed"
                        : "bg-gray-800 text-white hover:bg-gray-700"
                    }`}
                  >
                    {couponToggle.value ? "Applied" : "Apply"}
                  </button>
                </div>
              </div>
            )}

            {/* Cart Summary */}
            {cartItems.length > 0 && (
              <div className="border-t border-gray-200 pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Subtotal:</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Tax (10%):</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                {couponToggle.value && (
                  <div className="flex justify-between text-sm text-green-600">
                    <span>Discount (10%):</span>
                    <span>-${discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-lg font-bold border-t border-gray-200 pt-2">
                  <span>Total:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 mt-4">
                  Checkout 🚀
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

// Cart Item Row Component
const CartItemRow: React.FC<{
  item: CartItem;
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onRemoveItem: (productId: number) => void;
}> = ({ item, onUpdateQuantity, onRemoveItem }) => {
  const quantityCounter = useCounter(item.quantity, { min: 1, max: 10 });

  const handleQuantityChange = (newQuantity: number) => {
    quantityCounter.setCount(newQuantity);
    onUpdateQuantity(item.product.id, newQuantity);
  };

  return (
    <div className="flex items-center space-x-3 bg-gray-50 rounded-lg p-3">
      <img
        src={item.product.image}
        alt={item.product.name}
        className="w-12 h-12 object-cover rounded"
      />
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-sm text-gray-800 truncate">
          {item.product.name}
        </h4>
        <p className="text-green-600 font-bold">${item.product.price}</p>
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={() => handleQuantityChange(quantityCounter.count - 1)}
          disabled={quantityCounter.isAtMin}
          className={`w-6 h-6 rounded flex items-center justify-center text-xs ${
            quantityCounter.isAtMin
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          -
        </button>
        <span className="font-semibold text-sm w-6 text-center">
          {quantityCounter.count}
        </span>
        <button
          onClick={() => handleQuantityChange(quantityCounter.count + 1)}
          disabled={quantityCounter.isAtMax}
          className={`w-6 h-6 rounded flex items-center justify-center text-xs ${
            quantityCounter.isAtMax
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          +
        </button>
      </div>
      <button
        onClick={() => onRemoveItem(item.product.id)}
        className="text-red-500 hover:text-red-700 p-1"
      >
        🗑️
      </button>
    </div>
  );
};

export default ShoppingCart;
