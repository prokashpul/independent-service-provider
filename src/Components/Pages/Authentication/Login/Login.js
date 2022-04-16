import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Login.css";
const Login = () => {
  const [message, setMessage] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  if (user) {
    navigate("/");
  }

  const handelSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(email, password);
  };

  return (
    <div className=" login-container">
      <div className="login">
        <h2>Log In </h2>
        <form onSubmit={handelSubmit}>
          {error && error?.message}
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
            {loading && <p>loading....</p>}
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
