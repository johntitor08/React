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
  const [orderHistory, setOrderHistory] = useState([]);

  const totalPrice = cartItems
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  useEffect(() => {
    const savedOrders = localStorage.getItem("orderHistory");
    if (savedOrders) {
      const orders = JSON.parse(savedOrders);
      setOrderHistory(orders);

      if (orders.length > 0 && !cartItems.length) {
        setOrderSummary(orders[orders.length - 1].items);
        setOrderPlaced(true);
      }
    }
  }, [cartItems.length]);

  const handleFinish = () => {
    if (!cartItems.length) return;

    const newOrder = {
      id: Date.now(),
      date: new Date().toLocaleString(),
      items: [...cartItems],
      total: totalPrice,
    };

    const updatedHistory = [...orderHistory, newOrder];
    setOrderHistory(updatedHistory);
    localStorage.setItem("orderHistory", JSON.stringify(updatedHistory));

    setOrderSummary(cartItems);
    setOrderPlaced(true);
    dispatch(clearCart());
  };

  const handleReturnHome = () => navigate("/");

  const handleClearHistory = () => {
    localStorage.removeItem("orderHistory");
    setOrderHistory([]);
    setOrderPlaced(false);
    setOrderSummary([]);
    navigate("/");
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
                <img src={item.image} alt={item.title} />
                <div className="order-info">
                  <h4>{item.title}</h4>
                  <p>Qty: {item.quantity}</p>
                  <p>${item.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="order-total">Total Paid: ${totalPrice}</p>

          {orderHistory.length > 1 && (
            <div className="order-history-section">
              <h3>📋 Your Order History</h3>
              <div className="order-history-list">
                {orderHistory.slice(0, -1).map((order) => (
                  <div key={order.id} className="history-order">
                    <div className="history-order-header">
                      <span>Order #{order.id}</span>
                      <span>{order.date}</span>
                    </div>
                    <div className="history-order-items">
                      {order.items.map((item) => (
                        <div key={item.id} className="history-item">
                          <span>{item.title}</span>
                          <span>Qty: {item.quantity}</span>
                        </div>
                      ))}
                    </div>
                    <div className="history-order-total">
                      Total: ${order.total}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="thank-you-buttons">
            <button className="home-btn" onClick={handleReturnHome}>
              Return Home 🏠
            </button>
            {orderHistory.length > 0 && (
              <button
                className="clear-history-btn"
                onClick={handleClearHistory}
              >
                Clear Order History 🗑️
              </button>
            )}
          </div>
        </div>
      ) : cartItems.length === 0 ? (
        <div className="no-orders">
          <p>Your cart is empty. Add some products first.</p>
          {orderHistory.length > 0 && (
            <div className="order-history-section">
              <h3>📋 Your Order History</h3>
              <div className="order-history-list">
                {orderHistory.map((order) => (
                  <div key={order.id} className="history-order">
                    <div className="history-order-header">
                      <span>Order #{order.id}</span>
                      <span>{order.date}</span>
                    </div>
                    <div className="history-order-items">
                      {order.items.map((item) => (
                        <div key={item.id} className="history-item">
                          <span>{item.title}</span>
                          <span>Qty: {item.quantity}</span>
                        </div>
                      ))}
                    </div>
                    <div className="history-order-total">
                      Total: ${order.total}
                    </div>
                  </div>
                ))}
              </div>
              <button
                className="clear-history-btn"
                onClick={handleClearHistory}
              >
                Clear Order History 🗑️
              </button>
            </div>
          )}
        </div>
      ) : (
        <>
          <div className="order-items">
            {cartItems.map((item) => (
              <div key={item.id} className="order-item">
                <img src={item.image} alt={item.title} />
                <div className="order-info">
                  <h4>{item.title}</h4>
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
