import React from "react";

const BannerInfo = ({ bannerInfo }) => {
  const { img, title } = bannerInfo;
  return (
    <div className="slide">
      <img src={img} alt="" />
      <div className="overlay-title">
        <h2>{title}</h2>
        <button className="btn">Discover More</button>
      </div>
    </div>
  );
};

export default BannerInfo;
