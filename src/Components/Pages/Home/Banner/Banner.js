import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Banner.css";
import BannerInfo from "./BannerInfo";
const Banner = () => {
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    fetch("banner.json")
      .then((res) => res.json())
      .then((data) => setBanner(data));
  }, []);
  const settings = {
    dots: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };
  return (
    <div>
      <div>
        <Slider {...settings}>
          {banner.map((bannerInfo) => (
            <BannerInfo
              bannerInfo={bannerInfo}
              key={bannerInfo.id}
            ></BannerInfo>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
