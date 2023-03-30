import React from 'react'
import quese from '../assets/imagenes/quese.png';
import sabor from '../assets/imagenes/sabor.png';
import speed from '../assets/imagenes/speed.png';

const Proyects = () => {
  return (
    <div className='' id='Seccion3'>
        <h1 className='text-center font-Poppins text-orange-600 font-extrabold text-2xl'>Nuestros clientes</h1>
    <div className='bg-[#011d41] text-white flex items-center justify-center '>
        <div className='text-white max max-w-5xl'>
            <div className='mt-10 mb-10 h-100 flex items-center justify-between '>
                <div className='grid grid-cols-1 ml-2 odd:md:grid-cols-3 lg:grid-cols-1 '>
                    <img src={sabor} alt='' className='w-48 h-48 ml-8'/>
                    <img src={speed} alt='' className='w-56 h-56 mt-0 ml-0'/>
                    <img src={quese} alt='' className='w-44 h-42 rounded-lg mt-8 ml-8 '/>
                </div>
            </div>

        </div>
    </div>
    </div>
  )
}

export default Proyects
