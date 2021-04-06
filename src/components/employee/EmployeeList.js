import React, { useEffect, useState } from 'react';
import { getAllEmployees } from '../../modules/EmployeeManager';
import { EmployeeCard } from './Employee';

export const EmployeeList = () => {
  // set initial state as an empty array
  const [ employees, setEmployees ] = useState([]);

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

  return (
    <div className='container-cards'>
      {employees.map(employee =>
        <EmployeeCard key={ employee.id } employee={ employee } />) }
    </div>
  );
};