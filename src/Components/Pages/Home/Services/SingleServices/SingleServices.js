import React from "react";
import { useNavigate } from "react-router-dom";
import "./SingleServices.css";

const SingleServices = ({ services }) => {
  const { title, image, description, price, id } = services || {};
  const navigate = useNavigate();

  return (
    <article className="service">
      <div className="service-image">
        <img src={image} alt={title} />
      </div>
      <h4 className="price">$ {price}</h4>s
      <div className="service-body">
        <h3 className="service-title">{title}</h3>
        <p>{description}</p>
        <button className="btn" onClick={() => navigate(`/services/${id}`)}>
          Check out
        </button>
      </div>
    </article>
  );
};

export default SingleServices;
