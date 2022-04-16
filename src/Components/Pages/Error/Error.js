import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";

const Error = () => {
  return (
    <div className="error-page container">
      <img src="https://i.ibb.co/Qn4XtsV/Png-Item-1622413.png" alt="Error" />
      <Link to="/" className="btn">
        {" "}
        back To Home
      </Link>
    </div>
  );
};

export default Error;
