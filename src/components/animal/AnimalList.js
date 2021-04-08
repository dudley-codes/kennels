import React, { useEffect, useState } from 'react';
import { getAllAnimals, deleteAnimal } from '../../modules/AnimalManager';
import { AnimalCard } from './AnimalCard';
import { useHistory } from 'react-router-dom';

export const AnimalList = () => {
  // The initial state is an empty array
  const [ animals, setAnimals ] = useState([]);

  const history = useHistory();

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

  const handleDeleteAnimal = id => {
    deleteAnimal(id)
      .then(() => getAllAnimals().then(setAnimals));
  };

  return (
    <>
      <section className='section-content'>
        <button type='button'
          className='btn'
          onClick={ () => { history.push('/animals/create'); } }>
          Admit Animal
      </button>
        <div className="container-cards">
          { animals.map(animal =>
            <AnimalCard
              key={ animal.id }
              animal={ animal }
              handleDeleteAnimal={ handleDeleteAnimal } />) }
        </div>
      </section>

    </>
  );
};
