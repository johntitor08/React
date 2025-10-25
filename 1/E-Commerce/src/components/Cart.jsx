import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  clearCart,
  incrementQuantity,
  decrementQuantity,
} from "../redux/slices/cartSlice";
import "../css/Cart.css";
import { useNavigate } from "react-router-dom";

function Cart({ popup = false, darkMode = false, onClose }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const totalPrice = cartItems
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  const handlePlaceOrder = () => {
    if (cartItems.length === 0) return;
    navigate("/order");
    if (onClose) onClose();
    dispatch(clearCart());
  };

  const containerClass = popup
    ? `cart-popup ${darkMode ? "dark" : ""}`
    : "cart-container";

  return (
    <div className={containerClass}>
      {!popup && <h2>Your Cart 🛒</h2>}

      {cartItems.length === 0 ? (
        <p className={popup ? "" : "empty-cart"}>No items in cart.</p>
      ) : (
        <div className={popup ? "cart-items-popup" : "cart-items"}>
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              {!popup && <img src={item.image} alt={item.title} />}
              <div className="cart-info">
                <h4>{item.title}</h4>
                <p>Price: ${item.price}</p>
                <div className="cart-row">
                  <button onClick={() => dispatch(decrementQuantity(item.id))}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => dispatch(incrementQuantity(item.id))}>
                    +
                  </button>
                  <button onClick={() => dispatch(removeFromCart(item.id))}>
                    ✕
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {cartItems.length > 0 && popup && (
        <div className="cart-footer">
          <button className="checkout-btn" onClick={handlePlaceOrder}>
            Place Order
          </button>
          <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
          {onClose && <button onClick={onClose}>Close</button>}
          <p className="cart-total">Total: ${totalPrice}</p>
        </div>
      )}
    </div>
  );
}

export default Cart;
