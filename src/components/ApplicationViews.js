import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Home } from './Home';
import { CustomerList } from './customer/CustomerList';
import { EmployeeList } from './employee/EmployeeList';
import { LocationList } from './location/LocationList';
import { AnimalList } from './animal/AnimalList';
import { AnimalDetail } from './animal/AnimalDetail';
import { LocationDetail } from './location/LocationDetails';
import { Login } from '../components/auth/Login';
import { Register } from '../components/auth/Register';
import { AnimalEditForm } from './animal/AnimalEditForm';
import { AnimalForm } from './animal/AnimalForm';
import { EmployeeHireForm } from './employee/EmployeeHireForm';
export const ApplicationViews = () => {

  return (
    <>
      {/* Render the location list when http://localhost:3000 */ }
      <Route exact path='/'>
        <Home />
      </Route>

      {/* Render the animal list when http://localhost:3000/animals */ }
      <Route exact path='/animals'>
        <AnimalList />
        {/* { sessionStorage.getItem("kennel_customer") !== null ? <AnimalList /> : <Redirect to="/login" /> } */ }
      </Route>

      <Route path='/animals/create'>
        <AnimalForm />
      </Route>

      <Route path="/login">
        <Login />
      </Route>

      <Route path="/register">
        <Register />
      </Route>

      <Route exact path='/animals/:animalId(\d+)'>
        <AnimalDetail />
      </Route>

      <Route path="/animals/:animalId(\d+)/edit">
        <AnimalEditForm />

      </Route>

      <Route path='/customers'>
        <CustomerList />
      </Route>

      <Route exact path='/employees'>
        <EmployeeList />
      </Route>

      <Route path='/employees/hire'>
        <EmployeeHireForm />
      </Route>

      <Route exact path='/locations'>
        <LocationList />
      </Route>

      <Route path='/locations/:locationId(\d+)'>
        <LocationDetail />
      </Route>
    </>
  );
};


