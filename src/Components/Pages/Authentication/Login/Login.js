import React from "react";
import { Link } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Login.css";
const Login = () => {
  const handelSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className=" login-container">
      <div className="login">
        <h2>Log In </h2>
        <form onSubmit={handelSubmit}>
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
          <div className="forgat-password">Forget Password ?</div>
          <div className="login-btn">
            <button type="submit" className="btn">
              Log in
            </button>
            <div>
              You have no an account? <Link to="/register">Create Account</Link>
            </div>
          </div>
        </form>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Login;
