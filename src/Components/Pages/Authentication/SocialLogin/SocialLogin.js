import React from "react";
import {
  useSignInWithFacebook,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../../../firebase.init";
import "./SocialLogin.css";
const SocialLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [signInWithGoogle, user, error] = useSignInWithGoogle(auth);
  const [signInWithFacebook, fbUser, , FbError] = useSignInWithFacebook(auth);
  const from = location.state?.from?.pathname || "/";
  if (user || fbUser) {
    navigate(from, { replace: true });
  }
  if (error) {
    toast(error?.message);
  }
  if (FbError) {
    toast(FbError?.message);
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
        <div
          onClick={() => signInWithFacebook()}
          className="facebook"
          title="Facebook Login"
        >
          <img src="https://i.ibb.co/MRkYgV0/Facebook.png" alt="facebook" />
        </div>
        <div className="github" title="Github Login">
          <img src="https://i.ibb.co/mvGhymg/GitHub.png" alt="Github" />
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default SocialLogin;
