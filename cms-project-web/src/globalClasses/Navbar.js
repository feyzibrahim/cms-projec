import React from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../Hook/useLogout";
import { useAuthContext } from "../Hook/useAuthContext";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <nav className="navbar">
      <h1>e_campus</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        {!user && (
          <div>
            <Link to="/signup" className="fullColeredButton">
              Sign Up
            </Link>
            <Link to="/login" className="borderColoredButton">
              Log In
            </Link>
          </div>
        )}
        {user && (
          <div>
            <button className="borderColoredButton" onClick={handleClick}>
              Log Out
            </button>
            <span>{user.email}</span>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
