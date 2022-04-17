import React from "react";
import Title from "../../../../Utilities/DynamicTitle";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import "./Home.css";
const Home = () => {
  Title("ProWeb wedding photographer");
  return (
    <div className="home">
      <Banner></Banner>
      <Services></Services>
    </div>
  );
};

export default Home;
