import React from "react";
import "./Customer.css";

export const CustomerCard = ({ customer, handleDeleteCustomer }) => (
  <section className="animal">
    <h3 className="animal__name">{ customer.name }</h3>
    <div className="address">{ customer.address }</div>
    <button class='card' type='button' onClick={ () => handleDeleteCustomer(customer.id) }>Delete</button>
  </section>
);