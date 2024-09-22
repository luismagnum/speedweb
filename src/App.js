import React from 'react';
import Navbar from './components/Navbar';
import Hero from '../src/components/Hero';
import Slider from './components/Slider';
import Footer from './components/Footer';
import Projeto from './components/Projeto';
import Boton from './components/Boton';
import Planes from './components/Planes';

function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <Slider />
    <Projeto />
    <Planes />
    <Footer />
    <Boton />
    </>
    
  );
}

export default App;
