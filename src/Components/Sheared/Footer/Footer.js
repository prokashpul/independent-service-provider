import React from "react";
import FooterMenu from "../FooterNemu/FooterMenu";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <FooterMenu></FooterMenu>
      <footer className="footer">
        <p>Copyright by &copy; {new Date().getFullYear()} </p>
      </footer>
    </>
  );
};

export default Footer;
