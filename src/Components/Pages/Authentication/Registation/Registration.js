import React from "react";
import { Link } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Registration.css";
const Registration = () => {
  const handelSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <div className=" registration-container">
        <div className="registration">
          <h2>Registration Now</h2>
          <form onSubmit={handelSubmit}>
            <div className="form-group">
              <input
                type="name"
                name="name"
                id="name"
                placeholder="Full Name"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="Password"
                name="ConfirmPassword"
                id="ConfirmPassword"
                placeholder="Confirm Password"
                required
              />
            </div>
            <div className="login-btn">
              <button type="submit" className="btn">
                Sin Up
              </button>
              <div>
                Already an account? <Link to="/login">Login</Link>
              </div>
            </div>
          </form>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </>
  );
};

export default Registration;
