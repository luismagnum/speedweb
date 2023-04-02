import React from 'react';
import ItemsContainer from './ItemsContainer';
import SocialIcons from './SocialIcons';
import { Icons } from './Menu';
import whatsap from '../assets/imagenes/whatsapp-fill.svg';

const Footer = () => {
  return <footer className='bg-gray-900 text-white' id='Seccion4'>
    <div className='md:flex md:justify-between md: items-center sm:px-12 px-4 bg-[#ffffff19] py-7'>
      <h1 className='lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5'><span className='text-teal-400'>SpeedWeb</span>Te gustaria empezar un proyecto con nosotros?</h1>
      <div>
        <h1 className='text-teal-400 text-3xl font-semibold sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none'>Contactame Ya..</h1>
        <button className=" duration-300 px-5 py-2.5 font-[Poppins] rounded-md text-white md:w-auto w-full">
        <a href="https://wa.me/542984417477?text=Hola quiero un presupuesto " target="_blank">  
        <img src={whatsap} alt="what" width="50px" height="50px" />
        </a>
        </button>
      </div>
    </div>
    <ItemsContainer />
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-sm pb-8 '>
      <span>@ 2023 Developers Web Luis E. diaz</span>
      <span>SpeedWeb</span>
      <SocialIcons Icons={Icons}/>
      <button>
      <a className='text-center text-teal-400 font-semibold text-2xl hover:text-teal-600' href='#Seccion1'>HOME</a>
      </button>
      </div>
  </footer>
}

export default Footer
