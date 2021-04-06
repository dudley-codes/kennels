import React from "react";
import "./Location.css";

export const LocationCard = ({ location }) => (
  <section className="card">
    <div className="card-content">
      <h3><span className="card-petname">
        { location.name }
      </span></h3>
      <p>Address: <br></br>{ location.address }</p>
    </div>
  </section>
);
