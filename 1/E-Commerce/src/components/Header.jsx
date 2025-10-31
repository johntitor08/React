import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaBasketShopping } from "react-icons/fa6";
import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Cart from "./Cart";
import { setSearchQuery } from "../redux/slices/filterSlice";
import "../css/Header.css";

function Header({ darkMode, toggleTheme }) {
  const [showCart, setShowCart] = useState(false);
  const { cartItems } = useSelector((state) => state.cart);
  const { searchQuery } = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const handleCartClick = () => setShowCart((prev) => !prev);
  const handleCloseCart = () => setShowCart(false);
  const goHome = () => navigate("/");

  const handleSearchChange = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <header className={`navbar ${darkMode ? "dark" : ""}`}>
      <div
        className="navbar-left"
        onClick={goHome}
        style={{ cursor: "pointer" }}
        aria-label="Go to homepage"
      >
        <img className="logo" src="/src/images/logo.png" alt="Logo" />
        <p className="logo-text">E-Commerce</p>
      </div>

      <div className="navbar-center">
        <form onSubmit={handleSearchSubmit} className="search-form">
          <input
            className="search-input"
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={handleSearchChange}
            aria-label="Search products"
          />
        </form>
      </div>

      <div className="navbar-right">
        <div className="basket-container">
          <FaBasketShopping
            className="icon"
            onClick={handleCartClick}
            aria-label="Cart"
          />
          {totalQuantity > 0 && (
            <span className="basket-count">{totalQuantity}</span>
          )}

          {showCart && (
            <Cart popup={true} darkMode={darkMode} onClose={handleCloseCart} />
          )}
        </div>

        {darkMode ? (
          <CiLight
            className="icon"
            onClick={toggleTheme}
            title="Light Mode"
            aria-label="Toggle Light Mode"
          />
        ) : (
          <FaMoon
            className="icon"
            onClick={toggleTheme}
            title="Dark Mode"
            aria-label="Toggle Dark Mode"
          />
        )}
      </div>
    </header>
  );
}

export default Header;
