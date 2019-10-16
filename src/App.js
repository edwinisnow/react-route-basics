import React from 'react';
import logo from './logo.svg';
import './App.css';
import About from './About';
import Navigation from './Navigation';
import Shop from './Shop';

function App() {
  return (
    <div className="App">
      <Navigation />
      <About />
      <Shop />
    </div>
  );
}

export default App;
