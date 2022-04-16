import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import "./NavMenu.css";
const NavMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="nav-menu">
      <div className="mobile-menu">
        <h1 className="logo">
          Pro<span>Web</span>
        </h1>
        <div className="menu-icon" onClick={() => setOpenMenu(!openMenu)}>
          {!openMenu ? <HiMenu></HiMenu> : <HiX></HiX>}
        </div>
      </div>
      <ul
        onClick={() => setOpenMenu(false)}
        className={!openMenu ? "nav-items menu-close" : "nav-items"}
      >
        <li className="nav-item">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/blogs"
          >
            Blogs
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li className="nav-item ">
          <button
            onClick={() => navigate("/login")}
            className="btn"
            to="/login"
          >
            Login
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
