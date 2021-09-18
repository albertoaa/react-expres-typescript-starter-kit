import React from 'react';
import './App.css';

// Components
import { Customers } from './components/customers';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Customers />
      </div>
    </div>
  );
}

export default App;
