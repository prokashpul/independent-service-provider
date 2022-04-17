import React from "react";
import Title from "../../../../Utilities/DynamicTitle";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Services from "../Services/Services";
import "./Home.css";
const Home = () => {
  Title("ProWeb wedding photographer");
  return (
    <div className="home">
      <Banner></Banner>
      <Services></Services>
      <Contact></Contact>
    </div>
  );
};

export default Home;
