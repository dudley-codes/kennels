import React from 'react';
import './Employee.css';
import { Link } from 'react-router-dom';

export const EmployeeCard = ({ employee, handleFireEmployee }) => (
  <section className="card">
    <div className="card-content">
      <h3><span className="card-petname">
        { employee.name }
      </span></h3>
      <p>Job Title: <br></br>{ employee.jobTitle }</p>
      <Link to={ `/employees/${ employee.id }/edit` }>
        <button>Edit</button>
      </Link>
      <Link to={ `/employees/${ employee.id }/details` }>
        <button>Details</button>
      </Link>
      <button type="button" onClick={ () => handleFireEmployee(employee.id) }>Fire</button>
    </div>
  </section>
);
