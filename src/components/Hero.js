import React from 'react';
import imag2 from '../assets/imagenes/imag2.png';

const Hero = () => {
  return (
    <section className='py-4 md:px-24 px-4'>
    <div className='flex flex-wrap md:flex-row flex-col gap-5 pt-20 container'>
        <div className='flex-1'>
           <h1 className='font-Poppins text-teal-300 md:text-5xl text-4xl font-semibold tracking-wide md:leading-tight leading-snug'>¡Te ayudamos a impulsar tu negocio!</h1>
           <p className='text-teal-300 text-3xl md:w-2/3 md:py-4 py-2 leading-relaxed'>Una Web para alcanzar tus logros.</p>
        <div className='flex-1 flex justify-center'>
           <img src={imag2} alt='' className='flex items-center justify-center w-50% rounded-xl'/>
        </div>
        </div>
      
    </div>
    </section>
  )
}

export default Hero
