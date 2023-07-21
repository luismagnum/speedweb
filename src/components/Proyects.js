import React from 'react'
import quese from '../assets/imagenes/quese.png';
import sabor from '../assets/imagenes/sabor.png';
import speed from '../assets/imagenes/speed.png';
import logospeed from '../assets/imagenes/logospeed.png';

const Proyects = () => {
  return (
    <div className='' id='Seccion3'>
        <h1 className='text-center font-Poppins text-teal-400 font-extrabold text-2xl'>Nuestros clientes</h1>
    <div className='bg-[#011d41] text-white flex items-center justify-center '>
        <div className='text-white max max-w-5xl'>
            <div className='mt-10 mb-10 h-100 flex items-center justify-between '>
                <div className='grid grid-cols-1 mt-2 ml-2 md:grid-cols-4 lg:grid-cols-1 '>
                    <img src={sabor} alt='' className='w-48 h-48 ml-6 '/>
                    <img src={logospeed} alt='' className='w-48 h-48 mt-2 ml-6'/>
                    <img src={speed} alt='' className='w-56 h-56 mt-0 mb-2 ml-0'/>
                    <img src={quese} alt='' className='w-44 h-42 rounded-lg mt-12 ml-6 '/>
                </div>
            </div>

        </div>
    </div>
    </div>
  )
}

export default Proyects
