import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { fireEmployee, getAllEmployees } from '../../modules/EmployeeManager';
import { EmployeeCard } from './Employee';

export const EmployeeList = () => {
  // set initial state as an empty array
  const [ employees, setEmployees ] = useState([]);

  const history = useHistory();

  const getEmployee = () => {
    // After data comes back from the API, we 
    // use the setLocations function to update state
    return getAllEmployees().then(data => {
      setEmployees(data);
    });
  };

  useEffect(() => {
    getEmployee();
  }, []);

  const handleFireEmployee = (id) => {
    fireEmployee(id)
      .then(() => getAllEmployees().then(setEmployees));
  };

  return (
    <>
      <section className='section-content'>
        <button type='button'
          className='btn'
          onClick={ () => { history.push('/employees/hire'); } }>New Hire</button>
      </section>
      <div className='container-cards'>
        { employees.map(employee =>
          <EmployeeCard
            key={ employee.id }
            employee={ employee }
            handleFireEmployee={ handleFireEmployee } />) }
      </div>
    </>
  );
};