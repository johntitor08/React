import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import OrderPage from "../pages/OrderPage";
import OrderHistory from "../pages/OrderHistory";

function RouterConfig({ darkMode }) {
  return (
    <Routes>
      <Route path="/" element={<Home darkMode={darkMode} />} />
      <Route path="/order" element={<OrderPage darkMode={darkMode} />} />
      <Route
        path="/order-history"
        element={<OrderHistory darkMode={darkMode} />}
      />
    </Routes>
  );
}

export default RouterConfig;
