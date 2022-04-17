import React from "react";
import Title from "../../../../Utilities/DynamicTitle";
import Banner from "../Banner/Banner";
import "./Home.css";
const Home = () => {
  Title("ProWeb wedding photographer");
  return (
    <div className="home">
      <Banner></Banner>
    </div>
  );
};

export default Home;
