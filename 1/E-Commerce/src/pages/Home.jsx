import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import SearchAndFilter from "../components/SearchFilter";
import "../css/Home.css";

function Home({ darkMode }) {
  const [orderHistory, setOrderHistory] = useState([]);
  const [showOrderHistory, setShowOrderHistory] = useState(false);

  useEffect(() => {
    const savedOrders = localStorage.getItem("orderHistory");
    if (savedOrders) {
      setOrderHistory(JSON.parse(savedOrders));
    }
  }, []);

  const handleClearHistory = () => {
    localStorage.removeItem("orderHistory");
    setOrderHistory([]);
  };

  const getLastOrder = () => {
    return orderHistory.length > 0
      ? orderHistory[orderHistory.length - 1]
      : null;
  };

  const lastOrder = getLastOrder();

  return (
    <div className={`home-page ${darkMode ? "dark" : ""}`}>
      <h1>🛒 Welcome to Our Store</h1>
      <p>Explore our products and find what you love!</p>
      <SearchAndFilter darkMode={darkMode} />
      <ProductList darkMode={darkMode} />

      {lastOrder && (
        <div className="previous-order">
          <div className="previous-order-header">
            <h2>📦 Your Last Order</h2>
            <button
              className="toggle-order-btn"
              onClick={() => setShowOrderHistory(!showOrderHistory)}
            >
              {showOrderHistory ? "Hide History" : "Show All History"}
            </button>
          </div>

          <div className={`order-content ${showOrderHistory ? "visible" : ""}`}>
            <div className="order-summary">
              <h4>Most Recent Order ({lastOrder.date})</h4>
              {lastOrder.items.map((item) => (
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
            <p className="total">Total: ${lastOrder.total}</p>

            {showOrderHistory && orderHistory.length > 1 && (
              <div className="full-order-history">
                <h3>📋 Complete Order History</h3>
                {orderHistory
                  .slice(0, -1)
                  .reverse()
                  .map((order) => (
                    <div key={order.id} className="history-order">
                      <div className="history-order-header">
                        <span>Order #{order.id}</span>
                        <span>{order.date}</span>
                      </div>
                      <div className="history-order-items">
                        {order.items.map((item) => (
                          <div key={item.id} className="history-item">
                            <img src={item.image} alt={item.title} />
                            <div>
                              <span>{item.title}</span>
                              <span>Qty: {item.quantity}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="history-order-total">
                        Total: ${order.total}
                      </div>
                    </div>
                  ))}
                <button
                  className="clear-history-btn"
                  onClick={handleClearHistory}
                >
                  Clear All History 🗑️
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
