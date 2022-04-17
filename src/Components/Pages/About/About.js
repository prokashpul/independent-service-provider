import React from "react";
import Title from "../../../Utilities/DynamicTitle";
import "./About.css";

const About = () => {
  Title("About ");
  return (
    <section section className="about-container">
      <div className="about">
        <div className="about-left">
          <img
            src="https://i.ibb.co/jRBkbqc/240649570-3002244023333852-5554357986516231090-n-removebg-preview.png"
            alt="Prokash"
          />
          <div className="about-title">
            <h3>Prokash Pul</h3>
            <p>Junior Web Developer</p>
          </div>
        </div>
        <div className="about-right">
          <h2>About</h2>
          <p>
            I am <strong> Prakash Pul</strong> Junior Web Developer from
            Bangladesh. And Studied at Programming Hero. Only I love coding.
            Because I want to be a good web developer that's my burning desire.
            this reason i set my goal , i will be a good web programmer into
            next six month. I'm working towards that goal. so every day I spend
            at least 6-7 hours coding and doing my best. I believe i will reach
            my goal very far.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
