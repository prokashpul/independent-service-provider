import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import "./NavMenu.css";
const NavMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);
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
          <NavLink to="/blogs">Blogs</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
