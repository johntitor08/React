import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import "../css/Home.css";

function Home({ darkMode }) {
  const [lastOrder, setLastOrder] = useState([]);
  const [showOrder, setShowOrder] = useState(false);

  useEffect(() => {
    const savedOrder = localStorage.getItem("lastOrder");
    if (savedOrder) {
      setLastOrder(JSON.parse(savedOrder));
    }
  }, []);

  return (
    <div className={`home-page ${darkMode ? "dark" : ""}`}>
      <h1>🛒 Welcome to Our Store</h1>
      <p>Explore our products and find what you love!</p>

      <ProductList darkMode={darkMode} />

      {lastOrder.length > 0 && (
        <div className="previous-order">
          <div className="previous-order-header">
            <h2>📦 Your Last Order</h2>
            <button
              className="toggle-order-btn"
              onClick={() => setShowOrder(!showOrder)}
            >
              {showOrder ? "Hide" : "Show"}
            </button>
          </div>

          {showOrder && (
            <div className={`order-content ${showOrder ? "visible" : ""}`}>
              <div className="order-summary">
                {lastOrder.map((item) => (
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
              <p className="total">
                Total: $
                {lastOrder
                  .reduce((acc, item) => acc + item.price * item.quantity, 0)
                  .toFixed(2)}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
