import React from "react";
import { NavLink } from "react-router-dom";
import { useLogout } from "../Hook/useLogout";

const Navbar = () => {
  const { logout } = useLogout();

  const handleClick = () => {
    logout();
  };

  return (
    <nav className="verticalNavbar">
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to="/dash"
          >
            <span className="material-symbols-outlined">dashboard</span>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to="/dash/departments"
          >
            <span className="material-symbols-outlined">Class</span>Departments
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to="/dash/teachers"
          >
            <span className="material-symbols-outlined">Groups</span>Teachers
          </NavLink>
        </li>

        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to="/dash/meatings"
          >
            <span className="material-symbols-outlined">Hearing</span>Meatings
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to="/dash/dues"
          >
            <span className="material-symbols-outlined">Hourglass_Empty</span>
            Dues
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to="/dash/settings"
          >
            <span className="material-symbols-outlined">Settings</span>Settings
          </NavLink>
        </li>
      </ul>
      <button onClick={handleClick}>
        <span className="material-symbols-outlined">Logout</span>Logout
      </button>
    </nav>
  );
};

export default Navbar;
