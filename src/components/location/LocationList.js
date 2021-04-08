import React, { useEffect, useState } from 'react';
import { deleteLocation, getAllLocations } from '../../modules/LocationManager';
import { LocationCard } from './Location';

export const LocationList = () => {
  // set initial state as an empty array
  const [ locations, setLocations ] = useState([]);

  const getLocation = () => {
    // After data comes back from the API, we 
    // use the setLocations function to update state
    return getAllLocations().then(locationsFromAPI => {
      setLocations(locationsFromAPI);
    });
  };

  useEffect(() => {
    getLocation();
  }, []);

  const handleDeleteLocation = id => {
    deleteLocation(id)
      .then(() => getAllLocations().then(setLocations));
  };

  return (
    <div className='container-cards'>
      {locations.map(location =>
        <LocationCard
          key={ location.id }
          location={ location }
          handleDeleteLocation={ handleDeleteLocation } />) }
    </div>
  );
};