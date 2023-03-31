import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaChalkboard } from 'react-icons/fa';

// Import Swiper styles
import 'swiper/css';


const Slider = () => {
  return (
    <div className='bg-[#00052a] text-white flex items-center justify-center'id='Seccion2'>
    <div className='text-white max max-w-5xl'>
      <Swiper
      spaceBetween={40}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className='mt-20 mb-20 h-96 flex '>
            <div className={`card card-active  to-orange-600/40 border-orange-800`}>
                <div className='logo'>
                   <FaChalkboard /> 
                </div>
                <h2 className='text-3xl mt-2 font-semibold'>SpeedWeb</h2>
                <p className='para'>
                Abre una tienda en internet y empieza a vender por todo el pais.
                 Nuestra empresa de desarrollo web te guiará en todo el proceso.
                 Somos especialistas en generar soluciones. Soporte Tecnico.
                </p>
                <div className='bg-orange-600 skill-level'>1</div>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='mt-20 mb-20 h-96 flex '>
            <div className={`card card-active to-orange-600/40 border-orange-800`}>
                <div className='logo'>
                   <FaChalkboard /> 
                </div>
                <h2 className='text-3xl mt-2 font-semibold'>SpeedWeb</h2>
                <p className='para'>
                Diseñamos tu espacio en internet, tiendas online, catalogos, webs app.
                Desarrollamos aplicaciones de alta calidad, con un enfoque único
                orientado al diseño y la buena funcionalidad.
                </p>
                <div className='bg-orange-600 skill-level'>2</div>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='mt-20 mb-20 h-96 flex '>
            <div className={`card card-active to-orange-600/40 border-orange-800`}>
                <div className='logo'>
                   <FaChalkboard /> 
                </div>
                <h2 className='text-3xl mt-2 font-semibold'>SpeedWeb</h2>
                <p className='para'>
                Ofrecemos soluciones personalizadas para adaptarnos a las características,
                 mercado y objetivos de nuestros clientes.
                 Somos expertos en crear páginas web Premium con las últimas tecnologías.
                </p>
                <div className='bg-orange-600 skill-level'>3</div>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='mt-20 mb-20 h-96 flex '>
            <div className={`card card-active to-orange-600/40 border-orange-800`}>
                <div className='logo'>
                   <FaChalkboard /> 
                </div>
                <h2 className='text-3xl mt-2 font-semibold'>SpeedWeb</h2>
                <p className='para'>
                Realmente creemos que con una estrategia web correcta, comunicación acertada y 
                diseño creativo, tu empresa puede sacar un provecho de internet
                MUY superior al que imaginas posible.
                </p>
                <div className='bg-orange-600 skill-level'>4</div>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='mt-20 mb-20 h-96 flex '>
            <div className={`card card-active to-orange-600/40 border-orange-800`}>
                <div className='logo'>
                   <FaChalkboard /> 
                </div>
                <h2 className='text-3xl mt-2 font-semibold'>SpeedWeb</h2>
                <p className='para'>
                Los sitios que realizamos son compatibles para todos los navegadores y todas las 
                plataformas. Tus paginas web se verán con un diseño único y se adaptará
                 a la plataforma en la que se visualice. 
                </p>
                <div className='bg-orange-600 skill-level'>5</div>
            </div>
        </div>
      </SwiperSlide>
    </Swiper>
    </div>
    </div>
  )
}

export default Slider
