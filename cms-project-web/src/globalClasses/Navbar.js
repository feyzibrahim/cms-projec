import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>e_campus</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/signup" className="fullColeredButton">
          Sign Up
        </Link>
        <Link to="/login" className="borderColoredButton">
          Log In
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
