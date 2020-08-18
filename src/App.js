import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Hello from './About.js';
import Navbar from './component/Navbar';
import Home from './Home';
import Features from './Features.js';
import { BrowserRouter, Route} from 'react-router-dom'

function App() {
  return (
   <BrowserRouter>
    <Route exact path="/">
      <Navbar/>
      <Home/>
    </Route>
    <Route path="/About">
      <Navbar/>
      <Hello/>
    </Route>
    <Route path="/Features">
    <Navbar/>
    <Features/>
    </Route>
   </BrowserRouter>
  );
}

export default App;
