import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "../App.css";

function About() {
  const location = useLocation();
  const showNav = location.pathname === "/about";
  const showBack = !showNav;

  return (
    <div className="page">
      {showNav && (
        <div className="page-nav">
          <Link to="company">About Company</Link>
          <Link to="employee">About Employee</Link>
        </div>
      )}

      {showBack && (
        <div className="page-nav">
          <Link to="/about">← Back to About</Link>
        </div>
      )}

      <div className="page-content">
        <Outlet />
      </div>
    </div>
  );
}

export default About;
