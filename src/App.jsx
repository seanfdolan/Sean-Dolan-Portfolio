import React from 'react';
import Home from './pages/HomePage';

import './App.css';

import {Outlet} from 'react-router-dom'
import Navigation from './components/Navigation'
import { useState, useEffect, useContext, Component } from 'react'

// import Button from './react-bootstrap/Button'
import Footer from './components/Footer';
import Header from './components/Header';


function App()  {
  return (
    <div className="App">
      <Header />
      <Navigation />
    
      <main>
        <Outlet />
      </main>
    
      <Footer />
    </div>
  )
}

export default App;

