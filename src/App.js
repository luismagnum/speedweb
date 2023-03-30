import React from 'react';
import Navbar from '../src/components/navbar/Navbar';
import Hero from '../src/components/Hero';
import Slider from './components/Slider';
import Proyects from './components/Proyects';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <Slider />
    <Proyects />
    <Footer />
    </>
    
  );
}

export default App;
