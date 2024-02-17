import './App.css';
import BasicForm from './components/BasicForm/BasicForm';
import React, { useState } from 'react';
import Generations from './components/Generations/Generations';
import NavBar from './components/NavBar/NavBar';
import Navigations from './components/Navigation/Navigations';

function App() {

  return (
    <div className="App">
      <NavBar />
      <div className='user-content'>
        <div className='user-nav'><Navigations/></div>
        <div className='user-gen'><Generations/></div>
      </div>
      
    </div>
  );
}

export default App;
