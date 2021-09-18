import React, { useEffect, useState } from 'react';
import { Customer } from '../models/Customer';
import '../scss/customers.scss';

export const Customers: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);

  const fetchCustomers = async () => {
    const customerQuery = await fetch('/api/customers');
    const customers = await customerQuery.json();
    setCustomers(customers);
  };

  useEffect(() => {
    fetchCustomers();
  }, []);
  return (
    <div>
      <h1>Customers</h1>
      <div>
        <ul>
          {customers.map((customer) => (
            <li>{customer.firstName}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
