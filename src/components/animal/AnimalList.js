import React, { useEffect, useState } from 'react';
import { getAllAnimals } from '../../modules/AnimalManager';
import { AnimalCard } from './AnimalCard';

export const AnimalList = () => {
  // The initial state is an empty array
  const [ animals, setAnimals ] = useState([]);

  const getAnimals = () => {
    // After the data comes back from the API, we
    //  use the setAnimals function to update state
    return getAllAnimals().then(animalsFromAPI => {
      setAnimals(animalsFromAPI);
    });
  };

  useEffect(() => {
    getAnimals();
  }, []);

  return (
    <div className='container-cards'>
      {animals.map(animal =>
        <AnimalCard key={ animal.id } animal={ animal } />) }
    </div>
  );
};