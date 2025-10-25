import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../redux/slices/cartSlice";
import "../css/OrderPage.css";

function OrderPage({ darkMode }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderSummary, setOrderSummary] = useState([]);

  const totalPrice = cartItems
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  useEffect(() => {
    const savedOrder = localStorage.getItem("lastOrder");
    if (savedOrder && !cartItems.length) {
      setOrderSummary(JSON.parse(savedOrder));
      setOrderPlaced(true);
    }
  }, [cartItems.length]);

  const handleFinish = () => {
    if (!cartItems.length) return;
    setOrderSummary(cartItems);
    setOrderPlaced(true);
    localStorage.setItem("lastOrder", JSON.stringify(cartItems));
    dispatch(clearCart());
  };

  const handleReturnHome = () => navigate("/");

  const handleClearHistory = () => {
    localStorage.removeItem("lastOrder");
    setOrderPlaced(false);
    setOrderSummary([]);
  };

  return (
    <div className={`order-page ${darkMode ? "dark" : ""}`}>
      <h1>Order Summary 🧾</h1>

      {orderPlaced ? (
        <div className="thank-you">
          <h2>🎉 Thank you for your order!</h2>
          <p>Your products will be delivered soon.</p>

          <div className="order-items confirmed">
            {orderSummary.map((item) => (
              <div key={item.id} className="order-item">
                <img src={item.image} alt={item.name} />
                <div className="order-info">
                  <h4>{item.name}</h4>
                  <p>Qty: {item.quantity}</p>
                  <p>${item.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="order-total">
            Total Paid: $
            {orderSummary
              .reduce((acc, item) => acc + item.price * item.quantity, 0)
              .toFixed(2)}
          </p>

          <div className="thank-you-buttons">
            <button className="home-btn" onClick={handleReturnHome}>
              Return Home 🏠
            </button>
            <button className="clear-history-btn" onClick={handleClearHistory}>
              Clear Order History 🗑️
            </button>
          </div>
        </div>
      ) : cartItems.length === 0 ? (
        <p>Your cart is empty. Add some products first.</p>
      ) : (
        <>
          <div className="order-items">
            {cartItems.map((item) => (
              <div key={item.id} className="order-item">
                <img src={item.image} alt={item.name} />
                <div className="order-info">
                  <h4>{item.name}</h4>
                  <p>Qty: {item.quantity}</p>
                  <p>${item.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="order-footer">
            <p className="order-total">Total: ${totalPrice}</p>
            <button className="finish-order" onClick={handleFinish}>
              Confirm Order ✅
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default OrderPage;
