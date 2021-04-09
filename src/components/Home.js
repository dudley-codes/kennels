import React, { useState, useEffect } from "react";
import { AnimalSpotlight } from "../components/animal/AnimalSpotlight";
import { getRandomId } from "../modules/AnimalManager";
import { PropsAndState } from "./PropAndState";

// Takes current user from sessionStorage and parses it into an object
// const isLoggedIn = () => {
//   const user = JSON.parse(sessionStorage.getItem('kennel_customer'));
//   if (user !== null) {
//     return user.name;
//   }

// };


export const Home = () => {
  const [ spotlightId, setSpotlightId ] = useState(0);

  const refreshSpotlightAnimal = () => {
    getRandomId().then(setSpotlightId);
  };

  useEffect(() => {
    refreshSpotlightAnimal();
  }, []);

  return (
    <>
      {/* <h2>Welcome back, { currentUser() }</h2> */ }
      <address>
        Visit Us at the Nashville North Location
        <br />
        500 Puppy Way
      </address>
      <h1>Animal Spotlight</h1>
      <button onClick={ refreshSpotlightAnimal }>Reload &#x27f3;</button>
      {
        spotlightId && <AnimalSpotlight animalId={ spotlightId } />
      }
    </>
  );
};