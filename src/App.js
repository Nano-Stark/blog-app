import React from 'react';
import './App.css';
import { BrowserRouter as Router, 
  Routes, Route } from "react-router-dom"
import Header from './Header';
import Home from './Home';
import Portfolio from './Portfolio';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';


function App() {
  return (
    <div className="app">
        <Header />
        <About />
        <hr />
        <Home />
        <hr />
        <Portfolio />
        <hr />
        <Contact />
        <hr className="last"/>
        <Footer />
    </div>
  );
}

export default App;
