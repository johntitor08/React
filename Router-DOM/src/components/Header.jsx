import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">MySite</Link>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Header;
