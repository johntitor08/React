import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import OrderPage from "../pages/OrderPage";

function RouterConfig({ darkMode }) {
  return (
    <Routes>
      <Route path="/" element={<Home darkMode={darkMode} />} />
      <Route path="/order" element={<OrderPage darkMode={darkMode} />} />
    </Routes>
  );
}

export default RouterConfig;
