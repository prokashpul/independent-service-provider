import React from "react";
import "./SingleServices.css";

const SingleServices = ({ services }) => {
  const { title, image, description, price, id } = services || {};
  return (
    <article className="service">
      <div className="service-image">
        <img src={image} alt={title} />
      </div>

      <h4 className="price">$ {price}</h4>
      <div className="service-body">
        <h3 className="service-title">{title}</h3>
        <p>{description}</p>
        <button className="btn">Check out</button>
      </div>
    </article>
  );
};

export default SingleServices;
