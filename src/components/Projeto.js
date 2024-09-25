import React from 'react';
import dulc from '../assets/dulces.png';
import sab from '../assets/imagenes/sabor.png';
import deliver from '../assets/imagenes/deliver.png';
import teq from '../assets/imagenes/imgte.png';
import are from '../assets/imagenes/arepas.png';
import imaga from '../assets/imagenes/imaga.png';

export default function Projeto() {
  const proyectos = [
    {
      id: 1,
      img: are,
      titulo: "Comida",
      descripcion: "Venta de comida venezolana online, en donde el cliente puede escojer su comida preferida y encargar mediante un boton de whatsapp, para luego ser enviada a su casa.",
      link: "https://luismagnum.github.io/arepas/",
    },
    {
      id: 2,
      img: dulc,
      titulo: "Dulces",
      descripcion: "Nuestro sitio web te invita a degustar los mas ricos dulces, y de una forma sencilla y muy intuitiva puedes seleccionar y pedir tu dulce favorito, con solo apretar un boton.",
      link: "https://dulces-wnyp.vercel.app",
    },
    {
      id: 3,
      img: sab,
      titulo: "Comida",
      descripcion: "En esta pagina puedes ver nuestra variedad de comida y precios. Luego seleccionas la que mas te guste y con solo un click, te llega a tu casa,sitio de trabajo o donde te encuentres.",
      link: "https://luismagnum.github.io/sabores/",
    },
    {
      id: 4,
      img: deliver,
      titulo: "Delivery ",
      descripcion: "En esta pagina tienes varias opciones de delivery para varios sitios de comida de la ciudad, varios tipos de comida, pudiendo escojer y te lo llevamos a tu casa de manera puntual y segura.",
      link: "https://spontaneous-sunshine-99ff47.netlify.app/",
    },
    {
      id: 5,
      img: teq,
      titulo: "Comida",
      descripcion: "En esta pagina encontraras nuestros ricos platos autoctonos de Venezuela y en los que podras seleccionar el de tu preferencia para luego en la comodidad de tu hagar hacer el pedido y enviartelo a tu hogar.",
      link: "https://luismagnum.github.io/reactnav/",
    },
    {
      id: 6,
      img: imaga,
      titulo: "Barberia",
      descripcion: "Esta pagina esta diseñada para una barberia de caballeros, en donde puedes ver tipos de corte y los servicios que ofrecemos y en donde puedes solicitar un turno solo con presionar un boton de whatsaap.",
      link: "https://luismagnum.github.io/colo/",
    },
  ];

  return (
    <div className="bg-gray-900 py-12">
      <section className="flex items-center justify-center" id='Seccion3'>
        <h2 className="text-white text-2xl font-bold mb-12">PROYECTOS</h2>
      </section>
      
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:max-w-6xl mx-auto px-4">
        {proyectos.map((proyecto) => (
          <div key={proyecto.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
            <figure className="relative h-52">
              <img src={proyecto.img} alt={proyecto.titulo} className="w-full h-full sm:object-contain md:object-cover" />
            </figure>
            
            <div className="p-6">
              <h2 className="text-white text-xl font-bold mb-3">{proyecto.titulo}</h2>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">{proyecto.descripcion}</p>
              
              <a href={proyecto.link} target="_blank" rel="noopener noreferrer"  className="block bg-teal-500 text-white text-center py-2 rounded-lg mt-4 transition hover:bg-teal-600">
                Ver Proyecto
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 inline ml-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
