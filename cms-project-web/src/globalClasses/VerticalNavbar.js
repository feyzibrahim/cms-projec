import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="verticalNavbar">
      <ul>
        <li>
          <NavLink activeClassName="active" to="/">
            <span className="material-symbols-outlined">dashboard</span>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/dash/teachers">
            <span className="material-symbols-outlined">Groups</span>Teachers
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/dash/classes">
            <span className="material-symbols-outlined">Class</span>Class
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/dash/courses">
            <span className="material-symbols-outlined">Person</span>Courses
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/dash/meatings">
            <span className="material-symbols-outlined">Hearing</span>Meatings
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/dash/dues">
            <span className="material-symbols-outlined">Hourglass_Empty</span>
            Dues
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/dash/settings">
            <span className="material-symbols-outlined">Settings</span>Settings
          </NavLink>
        </li>
      </ul>
      <button>
        <span className="material-symbols-outlined">Logout</span>Logout
      </button>
    </nav>
  );
};

export default Navbar;
