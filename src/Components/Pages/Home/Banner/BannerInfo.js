import React from "react";
import { useNavigate } from "react-router-dom";

const BannerInfo = ({ bannerInfo }) => {
  const { img, title } = bannerInfo;
  const navigate = useNavigate();
  return (
    <div className="slide">
      <img src={img} alt="" />
      <div className="overlay-title">
        <h2>{title}</h2>
        <button onClick={() => navigate("/about")} className="btn">
          Discover More
        </button>
      </div>
    </div>
  );
};

export default BannerInfo;
