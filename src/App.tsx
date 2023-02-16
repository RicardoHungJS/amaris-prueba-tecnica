import React from 'react';
import './App.scss';

import LandingComponent from './components/landing/landing'
import HeaderComponent from './components/header/header'

function App() {
  return (
    <div className='general-container'>
      <HeaderComponent/>
      <LandingComponent/>
    </div>
  );
}

export default App;
