import React from 'react';
import speed from '../assets/imagenes/speed.png';
import whatsap from '../assets/imagenes/whatsapp-fill.svg';

const Hero = ()=>{
  return (
    <section className='py-4 md:px-24 px-4 fondo'>
    <div className='flex flex-wrap md:flex-row flex-col gap-5 pt-20 container'>
    <div className='sticky'>
    <a href="https://wa.me/542984417477?text=Hola quiero un presupuesto " target="_blank">  
        <img className='fixed mt-56'src={whatsap} alt="what" width="60px" height="60px" />
        </a>
    </div>
        <div className='flex-1'>
           <h1 className='font-Poppins text-orange-400 md:text-5xl text-4xl font-semibold tracking-wide md:leading-tight leading-snug'>¡Te ayudamos a impulsar tu negocio!</h1>
           <p className='text-orange-400 text-3xl md:w-2/3 md:py-4 py-2 leading-relaxed'>Una Web para alcanzar tus logros.</p>
        <div className='flex-1 flex justify-center '>
           <img src={speed} alt='' className='flex items-center justify-center w-50% '/>
        </div>
        </div>
      
    </div>
    </section>
  )
}

export default Hero
