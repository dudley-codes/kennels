import React from 'react';
import './Employee.css';

export const EmployeeCard = ({ employee }) => (
  <section className="card">
    <div className="card-content">
      <h3><span className="card-petname">
        { employee.name }
      </span></h3>
      <p>Job Title: <br></br>{ employee.jobTitle }</p>
    </div>
  </section>
);
