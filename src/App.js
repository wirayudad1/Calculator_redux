import React from 'react';
import logo from './logo.svg';
//import { Counter } from './calculator/calculator_view';
import { Counter } from './features/calculator/view_calculator';


import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>{Counter()}</div>
      </header>
    </div>
  );
}

export default App;
