import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { hireEmployee } from '../../modules/EmployeeManager';
import { getAllLocations } from '../../modules/LocationManager';
import '../animal/AnimalForm.css';

export const EmployeeHireForm = () => {
  // State will contain both animal data as well as an isLoading flag.
  // Define the initial state of the form inputs with useState()

  const [ employee, setEmployee ] = useState({
    name: '',
    locationId: 0,
    jobTitle: ''

  });

  const [ isLoading, setIsLoading ] = useState(false);

  // you will need the the `getAll` in the LocationsManager to complete this section
  const [ locations, setLocations ] = useState([]);

  const history = useHistory();

  //when a field changes, update state. The return will re-render and display based on the values in state
  // NOTE! What's happening in this function can be very difficult to grasp. Read it over many times and ask a lot questions about it.
  //Controlled component

  const handleControlledInputChange = (event) => {
    /* When changing a state object or array,
always create a copy, make changes, and then set state.*/
    const newEmployee = { ...employee };
    let selectedVal = event.target.value;
    // forms always provide values as strings. But we want to save the IDs as numbers.
    if (event.target.id.includes("Id")) {
      selectedVal = parseInt(selectedVal);
    }
    // Employee is an object with properties. Set the property to the new value use object bracket notation
    newEmployee[ event.target.id ] = selectedVal;
    // update state
    setEmployee(newEmployee);
  };

  useEffect(() => {
    getAllLocations()
      .then(loc => {
        setLocations(loc);
      });
  }, []);

  const handleClickSaveEmployee = (event) => {
    event.preventDefault();
    setIsLoading(true);

    const locationId = employee.locationId;

    if (locationId === 0) {
      window.alert('Please select a location');
    } else {
      // invoke addEmployee passing employee as an argument
      // Once complete, change the url and display the employee list
      hireEmployee(employee)
        .then(() => history.push('/employees'));
    }
  };

  return (
    <>
      <form className='animalForm'>
        <h2 className='animalForm__title'>New Hire Form</h2>
        <fieldset>
          <div className='form-group'>
            <label htmlFor='name'>Name:</label>
            <input type='text' id='name' onChange={ handleControlledInputChange } required autoFocus className='form-control' placeholder='Employee Name' value={ employee.name } />
          </div>
        </fieldset>
        <fieldset>
          <div className='form-group'>
            <label htmlFor='job-title'>Job Title:</label>
            <input type='text' id='jobTitle' className='form-control' onChange={ handleControlledInputChange } required autoFocus placeholder='Job Title...' value={ employee.jobTitle } />
          </div>
        </fieldset>
        <fieldset>
          <div className='form-group'>
            <label htmlFor='location'>Assign to Location</label>
            <select value={ employee.locationId } name='locationId' id='locationId' onChange={ handleControlledInputChange } className='form-control' >
              <option value='0'>Select a Location</option>
              { locations.map(loc => (
                <option key={ loc.id } value={ loc.id }>
                  {loc.name }
                </option>
              )) }
            </select>
          </div>
        </fieldset>
        <button className='btn btn-primary' disabled={ isLoading } type='button'
          onClick={ handleClickSaveEmployee }>
          Save Employee
        </button>
      </form>
    </>
  );

};