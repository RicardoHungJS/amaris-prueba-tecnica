import React from 'react';
import './App.scss';

import LandingComponent from './components/landing/landing'
import HeaderComponent from './components/header/header'
import BenefitsCardsComponent from './components/benefitsCards/benefitsCards'
import DocumentationsComponent from './components/documentationsLinks/documentations'
import TestimonialsComponent from './components/testimonials/testimonials'

function App() {
  return (
    <div className='general-container'>
      <HeaderComponent />
      <LandingComponent />
      <BenefitsCardsComponent />
      <DocumentationsComponent />
      <TestimonialsComponent />
    </div>
  );
}

export default App;
