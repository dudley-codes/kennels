import React, { useState, useEffect } from 'react';
import { getEmployeeById, updateEmployee } from '../../modules/EmployeeManager';
import '../animal/AnimalForm.css';
import { useHistory, useParams } from 'react-router-dom';
import { getAllLocations } from '../../modules/LocationManager';

export const EmployeeEditForm = () => {
  const [ employee, setEmployee ] = useState({ name: '', jobTitle: '' });
  const [ isLoading, setIsLoading ] = useState(false);
  const [ locations, setLocation ] = useState([]);

  const { employeeId } = useParams();
  const history = useHistory();

  const handleFieldChange = evt => {
    const stateToChange = { ...employee };
    stateToChange[ evt.target.id ] = evt.target.value;
    setEmployee(stateToChange);
  };

  const updateExistingEmployee = evt => {
    evt.preventDefault();
    setIsLoading(true);

    const editedEmployee = {
      id: employeeId,
      name: employee.name,
      jobTitle: employee.jobTitle,
      locationId: employee.locationId
    };

    updateEmployee(editedEmployee)
      .then(() => history.push('/employees'));
  };

  useEffect(() => {
    getEmployeeById(employeeId)
      .then(employee => {
        setEmployee(employee);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    getAllLocations()
      .then(location => {
        setLocation(location);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <form>
        <fieldset>
          <div className='formgrid'>
            <input
              type='text'
              required
              className='form-control'
              onChange={ handleFieldChange }
              id='name'
              value={ employee.name }
            />
            <label htmlFor='name'>Name:</label>

            <input
              type='text'
              required
              className='form-control'
              onChange={ handleFieldChange }
              id='jobTitle'
              value={ employee.jobTitle }
            />
            <label htmlFor='jobTitle'>Job Title</label>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="location">Change Location: </label>
            <select value={ employee.locationId } name="locationId" id="locationId" onChange={ handleFieldChange } className="form-control" >
              <option value="0">Select a location</option>
              { locations.map(l => (
                <option key={ l.id } value={ l.id }>
                  {l.name }
                </option>
              )) }
            </select>
          </div>
        </fieldset>
        <div className='alignRight'>
          <button
            type='button'
            disabled={ isLoading }
            onClick={ updateExistingEmployee }
            className='btn btn-primary'>Submit</button>
        </div>
      </form>
    </>
  );
};