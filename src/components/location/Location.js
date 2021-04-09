import React from "react";
import { Link } from 'react-router-dom';
import "./Location.css";

export const LocationCard = ({ location, handleDeleteLocation }) => (
  <section className="card">
    <div className="card-content">
      <h3><span className="card-petname">
        { location.name }
      </span></h3>
      <p>Address: <br></br>{ location.address }</p>

      <button type='button' onClick={ () => handleDeleteLocation(location.id) }>Close Location</button>

      <Link to={ `/locations/${ location.id }` }>
        <button>Details</button>
      </Link>

    </div>
  </section>
);
