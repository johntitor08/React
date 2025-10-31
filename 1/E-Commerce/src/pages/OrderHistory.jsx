import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/OrderPage.css";

function OrderHistory({ darkMode }) {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const existingHistory = JSON.parse(localStorage.getItem("orderHistory"));
    if (!existingHistory) {
      const lastOrder = JSON.parse(localStorage.getItem("lastOrder"));
      if (lastOrder) {
        const newOrder = {
          id: Date.now(),
          date: new Date().toISOString(),
          items: lastOrder,
          total: lastOrder
            .reduce((acc, item) => acc + item.price * item.quantity, 0)
            .toFixed(2),
        };
        const updatedHistory = [newOrder];
        localStorage.setItem("orderHistory", JSON.stringify(updatedHistory));
        localStorage.removeItem("lastOrder");
        setOrders(updatedHistory);
      } else {
        setOrders([]);
      }
    } else {
      setOrders(existingHistory);
    }
  }, []);

  const handleClearHistory = () => {
    localStorage.removeItem("orderHistory");
    setOrders([]);
    navigate("/");
  };

  return (
    <div className={`order-history ${darkMode ? "dark" : ""}`}>
      <h1>Order History</h1>
      {orders.length === 0 ? (
        <p>No past orders.</p>
      ) : (
        <div className="orders-list">
          {orders.map((order) => (
            <div key={order.id} className="order">
              <h3>Order Placed: {new Date(order.date).toLocaleString()}</h3>
              <p className="order-total">Total: ${order.total}</p>
              <div className="order-items">
                {order.items.map((item) => (
                  <div key={item.id} className="order-item">
                    <img src={item.image} alt={item.title} />
                    <div className="order-item-info">
                      <h4>{item.title}</h4>
                      <p>Quantity: {item.quantity}</p>
                      <p>Price: ${item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
      {orders.length > 0 && (
        <button className="clear-history-btn" onClick={handleClearHistory}>
          Clear Order History
        </button>
      )}
      <button className="back-home-btn" onClick={() => navigate("/")}>
        Back to Home
      </button>
    </div>
  );
}

export default OrderHistory;
