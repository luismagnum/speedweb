import React from 'react';
import Navbar from './components/Navbar';
import Hero from '../src/components/Hero';
import Slider from './components/Slider';
import Proyects from './components/Proyects';
import Footer from './components/Footer';
import Home from './components/Home';

function App() {
  return (
    <>
    <Navbar />
    <Home />
    <Slider />
    <Proyects />
    <Footer />
    </>
    
  );
}

export default App;
