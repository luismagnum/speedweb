import React from 'react'
import gem from '../assets/imagenes/gemini.png';
import dulc from '../assets/dulces.png';
import sab from '../assets/imagenes/sabor.png';
import speed from '../assets/speed.png';
import deliver from '../assets/imagenes/deliver.png';
import movi from '../assets/imagenes/movie.png';

export default function Projeto() {
  return (
    <div>
      <section className='flex items-center justify-center' id='Seccion3'>
        <h2 className='text-white text-3xl font-bold mt-4'>PROYECTS</h2>
      </section>
      <div className='sm:mx-auto sm:px-30 sm:grid grid-cols-1 md:grid-cols-4 gap-8 p-4 mt-2 mb-60'>
        <div className="text-center justify-center mx-auto card w-full border-none mb-60 md:mb-6">
          <figure><img src={gem} alt="Shoes" className='rounded-md' /></figure>
          <div className="card-body bg-[#0c090d]">
            <h2 className="card-title font-bold text-white">React Api</h2>
            <p className='text-white text-justify p-2'>
              La aplicación simula algunas de las funcionalidades del chatbot original de Gemini, permitiendo a los usuarios interactuar con un modelo de inteligencia artificial.
            </p>
            <div className="flex flex-row mx-auto card-actions justify-between gap-2">
              <button className="text-sm bg-teal-500 px-3 py-1 rounded-lg mx-auto mt-4">
                <a href='https://luismagnum.github.io/gemini/' target='_blank' rel='norreferrer' className='flex gap-1'>
                  deploy
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="text-center justify-center mx-auto card w-full border-none mb-60 md:mb-6">
          <figure><img src={dulc} alt="Shoes" className='rounded-md' /></figure>
          <div className="card-body bg-[#0c090d]">
            <h2 className="text-white card-title font-bold mt-2">React Nextjs</h2>
            <p className='text-white text-justify p-2'>
              Nuestro sitio web está construido utilizando React, una biblioteca JavaScript de código abierto, y aprovechando las características potentes de Nextjs 14.
            </p>
            <div className="flex flex-row mx-auto card-actions justify-between gap-2">
              <button className="text-sm bg-teal-500 px-3 py-1 rounded-lg mx-auto mt-4">
                <a href='https://dulces-wnyp.vercel.app' target='_blank' rel='norreferrer' className='flex gap-1'>
                  deploy
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="text-center justify-center mx-auto card w-full border-none mb-60 md:mb-6">
          <figure><img src={sab} alt="Shoes" className='rounded-md' /></figure>
          <div className="card-body bg-[#0c090d]">
            <h2 className="text-white card-title font-bold mt-3">React tailwindcss</h2>
            <p className='text-white text-justify p-2'>
              La aplicación es un ecommerce de comida rápida, en donde el usuario de una manera cómoda escoge comprar de una manera rápida y fácil.
            </p>
            <div className="flex flex-row mx-auto card-actions justify-between gap-2">
              <button className="text-sm bg-teal-500 px-3 py-1 rounded-lg mx-auto mt-4">
                <a href='https://luismagnum.github.io/sabores/' target='_blank' rel='norreferrer' className='flex gap-1'>
                  deploy
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="text-center justify-center mx-auto card w-full border-none mb-24 md:mb-6">
          <figure><img src={deliver} alt="Shoes" className='rounded-md' /></figure>
          <div className="card-body bg-[#0c090d]">
            <h2 className="text-white card-title font-bold">Astro Tailwindcss</h2>
            <p className='text-white text-justify p-2'>
              La aplicación es una landing page, diseñada con el framework Astro, brindando varias opciones para un servicio de delivery de comida rápida.
            </p>
            <div className="flex flex-row mx-auto card-actions justify-between gap-2">
              <button className="text-sm bg-teal-500 px-3 py-1 rounded-lg mx-auto mt-4">
                <a href='https://spontaneous-sunshine-99ff47.netlify.app/' target='_blank' rel='norreferrer' className='flex gap-1'>
                  deploy
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
  </div>
  );
}
