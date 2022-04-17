import React, { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Login.css";
import Title from "../../../../Utilities/DynamicTitle";

const Login = () => {
  Title("Login now");
  const emailRef = useRef("");
  const location = useLocation();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, recoveryError] =
    useSendPasswordResetEmail(auth);
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  if (user) {
    navigate(from, { replace: true });
  }

  const handelSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(email, password);
  };
  const passwordRecovery = async () => {
    const email = emailRef.current.value;
    await sendPasswordResetEmail(email);
    if (recoveryError || sending) {
      toast(recoveryError?.message);
    } else if (email === "") {
      toast("Please fill up email field");
    } else {
      toast("email send.");
    }
  };
  if (error) {
    toast(error?.message);
  }

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
              ref={emailRef}
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
          <div onClick={() => passwordRecovery()} className="forgat-password">
            Forget Password ?
          </div>
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
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default Login;
