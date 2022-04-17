import React from "react";
import { Link } from "react-router-dom";
import "./Contact.css";
const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-context">
        <h2>Wedding Photo & Video Package</h2>
        <p>Wedding Decoration And Documentation</p>
        <Link to="/" className="btn">
          Contact Me
        </Link>
      </div>
    </section>
  );
};

export default Contact;
