import React, { useState } from 'react';
import { Home } from './Home';
import { Login } from '../components/auth/Login';
import { Register } from '../components/auth/Register';
import { AnimalList } from './animal/AnimalList';
import { AnimalForm } from './animal/AnimalForm';
import { CustomerList } from './customer/CustomerList';
import { EmployeeList } from './employee/EmployeeList';
import { LocationList } from './location/LocationList';
import { AnimalDetail } from './animal/AnimalDetail';
import { LocationDetail } from './location/LocationDetails';
import { AnimalEditForm } from './animal/AnimalEditForm';
import { Route, Redirect } from 'react-router-dom';
import { NewLocationForm } from './location/LocationForm';
import { EmployeeHireForm } from './employee/EmployeeHireForm';
import { EmployeeEditForm } from './employee/EmployeeEditForm';

// export let currentUserName = "";
// console.log('test', currentUserName);

export const ApplicationViews = ({ isAuthenticated, setAuthUser }) => {

  const currentUser = JSON.parse(sessionStorage.getItem('kennel_customer'));

  return (
    <>
      <Route exact path='/'>
        { isAuthenticated
          && <h2>Welcome back, { currentUser.name }</h2> }
        <Home />
      </Route>

      <Route exact path='/animals'>
        { isAuthenticated ? <AnimalList /> : <Redirect to="/login" /> }
      </Route>

      <Route path='/animals/create'>
        <AnimalForm />
      </Route>

      <Route path="/login">
        <Login setAuthUser={ setAuthUser } />
      </Route>

      <Route path="/register">
        <Register setAuthUser={ setAuthUser } />
      </Route>

      <Route exact path='/animals/:animalId(\d+)'>
        <AnimalDetail />
      </Route>

      <Route path="/animals/:animalId(\d+)/edit">
        <AnimalEditForm />

      </Route>

      <Route path='/employees/:employeeId(\d+)/edit'>
        <EmployeeEditForm />
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

      <Route path='/locations/new'>
        <NewLocationForm />
      </Route>
    </>
  );
};


