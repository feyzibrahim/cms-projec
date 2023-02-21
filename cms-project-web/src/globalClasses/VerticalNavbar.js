import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="verticalNavbar">
      <ul>
        <li>
          <Link className="active" to="/dashboard">
            <span className="material-symbols-outlined">dashboard</span>
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/teachers">
            <span className="material-symbols-outlined">Groups</span>Teachers
          </Link>
        </li>
        <li>
          <Link to="/classes">
            <span className="material-symbols-outlined">Class</span>Class
          </Link>
        </li>
        <li>
          <Link to="/courses">
            <span className="material-symbols-outlined">Person</span>Courses
          </Link>
        </li>
        <li>
          <Link to="/meatings">
            <span className="material-symbols-outlined">Hearing</span>Meatings
          </Link>
        </li>
        <li>
          <Link to="/dues">
            <span className="material-symbols-outlined">Hourglass_Empty</span>
            Dues
          </Link>
        </li>
        <li>
          <Link to="/settings">
            <span className="material-symbols-outlined">Settings</span>Settings
          </Link>
        </li>
      </ul>
      <button>
        <span className="material-symbols-outlined">Logout</span>Logout
      </button>
    </nav>
  );
};

export default Navbar;
