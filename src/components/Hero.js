import React from 'react';

const Hero = ()=>{
  return (
    <section className='py-4 md:px-24 px-4 fondo'>
    <div className='flex flex-wrap md:flex-row flex-col gap-5 pt-24 container'>
        <div className='flex-1'>
           <h1 className='cabin text-orange-600 sm:text-2xl md:text-5xl text-4xl font-semibold tracking-wide md:leading-tight leading-snug'>Diseño web ventas online</h1>
           <div className='sticky'>
            </div>
           <p className='cabin text-white text-3xl md:w-2/3 md:py-2 py-2 leading-relaxed'>Nos dedicamos exclusivamente al ecommerce</p>
           <p className='cabin text-white text-3xl md:w-2/3 md:py-2 py-2 leading-relaxed'>Te ayudamos a que tu negocio crezca</p>
        <div className='flex-1 flex justify-center items-center'>
          <p className='text-xl md:w-1/3 h-80 mt-1 cabin text-orange-600 md:text-3xl font-extrabold'>"Soluciones a tu medida"</p>
        </div>
        </div>
    </div>
    </section>
  )
}

export default Hero
