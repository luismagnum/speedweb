import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const SocialIcons = ({Icons}) => {
  return (
    <div className='text-teal-500'>
      {Icons.map(icon=>(
        <span key={icon.name} className='p-2 gap-2 cursor-pointer inline-flex items-center rounded-full  mx-1.5 text-2xl hover:text-gray-100 hover:bg-teal-500 duration-300'>
        <FaFacebook />
        <FaInstagram />
        <FaWhatsapp />
        <ion-icon name={icon.name}></ion-icon>
        </span>
      ))}
    </div>
  )
}

export default SocialIcons
