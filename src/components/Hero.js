import React from 'react';
import speed from '../assets/imagenes/speed.png';

const Hero = ()=>{
  return (
    <section className='py-4 md:px-24 px-4 fondo'>
    <div className='flex flex-wrap md:flex-row flex-col gap-5 pt-24 container'>
        <div className='flex-1'>
           <h1 className='font-Poppins text-orange-500  md:text-5xl text-4xl font-semibold tracking-wide md:leading-tight leading-snug'>¡Te ayudamos a impulsar tu negocio!</h1>
           <div className='sticky'>
            </div>
           <p className='text-orange-400 text-3xl md:w-2/3 md:py-2 py-2 leading-relaxed'>Una Web para alcanzar tus logros.</p>
        <div className='flex-1 flex justify-center items-center'>
          <p className='text-xl md:w-1/3 h-80 mt-1 font-Poppins text-orange-500 md:text-3xl font-bold'>"Soluciones a tu medida"</p>
           
        </div>
        </div>
      
    </div>
    </section>
  )
}

export default Hero
