import React from "react";
import { NavLink } from "react-router-dom";
import "./FooterMenu.css";
const FooterMenu = () => {
  return (
    <section className="footer-menu">
      <div className="Footer-logo">
        <h2>
          <span>Pro</span>Web
        </h2>
        <p>Wedding Photography & Video Shooting</p>
      </div>
      <div className="">
        <h4>NAVIGATION</h4>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/blogs"
            >
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/about"
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="">
        <h4>OUR SERVICE</h4>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="*"
            >
              Photography
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="*"
            >
              Video Shooting
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="*"
            >
              Decoration
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="">
        <h4>CONTACT ME</h4>
        <ul>
          <li>31 segunbagich ,Dhaka 1000</li>
          <li>Email : prokashpul2@gmail.com</li>
          <li tel="+18456002121">Call: +1-(845)-6002121</li>
        </ul>
      </div>
    </section>
  );
};

export default FooterMenu;
