import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Registration.css";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useUpdateProfile } from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";

const Registration = () => {
  const [message, setMessage] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const navigate = useNavigate();

  const handelSubmit = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const ConfirmPassword = event.target.ConfirmPassword.value;
    if (password === ConfirmPassword) {
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName: name });
    } else {
      setMessage("Password not matched !!");
    }
  };

  if (user) {
    navigate("/");
  }
  if (error || updateError) {
    setMessage(error.message, updateError.message);
  }
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
            <p>{message}</p>
            {loading && <p>loading......</p>}
            {updating && <p>updating......</p>}
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
