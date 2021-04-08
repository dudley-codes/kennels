import React, { useEffect, useState } from 'react';
import { getAllCustomers, deleteCustomer } from '../../modules/CustomerManager';
import { CustomerCard } from './Customer';

export const CustomerList = () => {
  // set initial state as an empty array
  const [ customers, setCustomers ] = useState([]);

  const getCustomer = () => {
    // after data comes back from the API, we use the setLocations function to update state
    return getAllCustomers().then(data => {
      setCustomers(data);
    });
  };

  useEffect(() => {
    getCustomer();
  }, []);

  const handleDeleteCustomer = (id) => {
    deleteCustomer(id)
      .then(() => getAllCustomers().then(setCustomers));
  };

  return (
    <div className='container-cards'>
      {customers.map(customer =>
        <CustomerCard
          key={ customer.id }
          customer={ customer }
          handleDeleteCustomer={ handleDeleteCustomer }
        />) }
    </div>
  );
};