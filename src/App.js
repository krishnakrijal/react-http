import React from 'react';
import './App.css';

import useHook from './comp2/custom';

function App() {

  const [salary,increaseSalary] = useHook();
  return (
    <div className="App">
    <h1>salary is {salary}</h1>
    <button onClick={increaseSalary}>increase</button>
    </div>
  );
}


export default App;
