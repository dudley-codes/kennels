import React, { useState, useEffect } from 'react';
import { getEmployeeById, fireEmployee } from '../../modules/EmployeeManager';
import '../animal/AnimalDetail.css';
import { useParams, useHistory } from 'react-router-dom';

export const EmployeeDetail = () => {
  const [ employee, setEmployee ] = useState({ name: '', jobTitle: '', location: '' });
  const [ isLoading, setIsLoading ] = useState(true);

  const { employeeId } = useParams();
  const history = useHistory();

  const handleDelete = () => {
    setIsLoading(true);
    fireEmployee(employeeId).then(() =>
      history.push('/employees'));
  };

  useEffect(() => {
    getEmployeeById(employeeId)
      .then(employee => {
        setEmployee({
          name: employee.name,
          jobTitle: employee.jobTitle,
          location: employee.location
        });
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <h2>You did it! You crazy son of a bitch, you really did it!</h2>
    </>
  );
};