import React from "react";
import { Link, Outlet } from "react-router-dom";

function About() {
  return (
    <div>
      <Link to="company">About Company</Link>
      <Link to="employee">About Employee</Link>
      <Outlet />
    </div>
  );
}

export default About;
