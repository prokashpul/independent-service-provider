import React from "react";
import "./SocialLogin.css";
const SocialLogin = () => {
  return (
    <div>
      <div className="more-option">
        <span></span>
        <p>Or</p>
        <span></span>
      </div>
      <div className="social-login">
        <div className="google" title="Google Login">
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
