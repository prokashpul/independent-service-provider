import React from "react";
import useDataLoad from "../../../../Hooks/DataLoad/useDataLoad";
import SingleServices from "./SingleServices/SingleServices";
import "./Services.css";

const Services = () => {
  const [services] = useDataLoad("services.json");

  return (
    <section className="container services-container">
      <h2>Service Package</h2>
      <div className="services">
        {services?.slice(0, 3).map((services) => (
          <SingleServices
            services={services}
            key={services?.id}
          ></SingleServices>
        ))}
      </div>
    </section>
  );
};

export default Services;
