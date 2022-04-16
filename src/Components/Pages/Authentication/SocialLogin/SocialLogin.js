import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../../firebase.init";
import "./SocialLogin.css";
const SocialLogin = () => {
  const navigate = useNavigate();
  const [signInWithGoogle, user, error] = useSignInWithGoogle(auth);
  if (user) {
    toast("loading...");
    navigate("/");
  }
  if (error) {
    toast(error.message);
  }

  return (
    <div>
      <div className="more-option">
        <span></span>
        <p>Or</p>
        <span></span>
      </div>
      <div className="social-login">
        <div
          onClick={() => signInWithGoogle()}
          className="google"
          title="Google Login"
        >
          <img src="https://i.ibb.co/cvbHMw3/Google.png" alt="google" />
        </div>
        <div className="facebook" title="Facebook Login">
          <img src="https://i.ibb.co/MRkYgV0/Facebook.png" alt="facebook" />
        </div>
        <div className="github" title="Github Login">
          <img src="https://i.ibb.co/mvGhymg/GitHub.png" alt="Github" />
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
