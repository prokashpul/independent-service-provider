import React from "react";
import {
  useSignInWithFacebook,
  useSignInWithGithub,
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
  const [signInWithGithub, gitUser, gitError] = useSignInWithGithub(auth);

  const from = location.state?.from?.pathname || "/";
  if (user || fbUser || gitUser) {
    navigate(from, { replace: true });
  }
  if (error) {
    toast(error?.message);
  } else if (FbError) {
    toast(FbError?.message);
  } else if (gitError) {
    toast(gitError?.message);
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
        <div
          onClick={() => signInWithGithub()}
          className="github"
          title="Github Login"
        >
          <img src="https://i.ibb.co/mvGhymg/GitHub.png" alt="Github" />
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default SocialLogin;
