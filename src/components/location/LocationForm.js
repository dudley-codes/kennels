import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { addLocation } from '../../modules/LocationManager';
import '../animal/AnimalForm.css';

export const NewLocationForm = () => {
  // Define the initial state of the form inputs with useState()

  const [ location, setLocation ] = useState({
    name: '',
    address: ''
  });

  const [ isLoading, setIsLoading ] = useState(false);

  const history = useHistory();

  const handleControlledInputChange = (event) => {
    const newLocation = { ...location };
    let selectedVal = event.target.value;

    if (event.target.id.includes('Id')) {
      selectedVal = parseInt(selectedVal);
    }
    // Location is an object with properties. Set the property to the new value use object bracket notation
    newLocation[ event.target.id ] = selectedVal;

    // update state
    setLocation(newLocation);
  };

  const handleClickSaveLocation = (event) => {
    event.preventDefault();
    setIsLoading(true);

    const address = location.address;

    if (address === '') {
      window.alert('Hey dumbass, you forgot to add an address');
    } else {
      addLocation(location)
        .then(() => history.push('/locations'));
    }
  };

  return (
    <>
      <form className='animalForm'>
        <h2 className='animalForm__title'>New Location Form</h2>
        <fieldset>
          <div className='form-group'>
            <label htmlFor='name'>Name:</label>
            <input type='text' id='name' onChange={ handleControlledInputChange } required autoFocus placeholder='Location Name...' value={ location.name } />
          </div>
        </fieldset>
        <fieldset>
          <div className='form-group'>
            <label htmlFor='address'>Address</label>
            <input type='text' id='address' onChange={ handleControlledInputChange }
              required autoFocus placeholder='Location Address...' value={ location.address } />
          </div>
        </fieldset>
        <button className='btn btn-primary' disabled={ isLoading } type='button'
          onClick={ handleClickSaveLocation }>
          Save Location
        </button>
      </form>
    </>
  );
};