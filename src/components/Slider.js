import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import { FaChalkboard, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Slider = () => {
  return (
    <div className='text-white flex items-center justify-center' id='Seccion2'>
      <div className='text-white max-w-5xl w-full px-4'>
      <section className="flex items-center justify-center">
        <h2 className="text-white text-2xl font-extrabold mt-8 mb-8">TE OFRECEMOS</h2>
      </section>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{ clickable: true }}
        >
          {[...Array(5)].map((_, index) => (
            <SwiperSlide key={index}>
              <div className='mt-20 mb-20 h-96 flex justify-center items-center'>
                <div className='card card-active to-orange-600/40 border-orange-800 p-4'>
                  <div className='logo'>
                    <FaChalkboard />
                  </div>
                  <h2 className='text-3xl mt-2 font-semibold'>SpeedWeb</h2>
                  <p className='para'>
                    {index === 0 && "Abre una tienda en internet y empieza a vender por todo el pais. Nuestra empresa de desarrollo web te guiará en todo el proceso. Somos especialistas en generar soluciones. Soporte Tecnico."}
                    {index === 1 && "Diseñamos tu espacio en internet, tiendas online, catalogos, webs app. Desarrollamos aplicaciones de alta calidad, con un enfoque único orientado al diseño y la buena funcionalidad."}
                    {index === 2 && "Ofrecemos soluciones personalizadas para adaptarnos a las características, mercado y objetivos de nuestros clientes. Somos expertos en crear páginas web Premium con las últimas tecnologías."}
                    {index === 3 && "Realmente creemos que con una estrategia web correcta, comunicación acertada y diseño creativo, tu empresa puede sacar un provecho de internet MUY superior al que imaginas posible."}
                    {index === 4 && "Los sitios que realizamos son compatibles para todos los navegadores y todas las plataformas. Tus paginas web se verán con un diseño único y se adaptará a la plataforma en la que se visualice."}
                  </p>
                  <div className='bg-orange-600 skill-level'>{index + 1}</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-button-next text-white">
            <FaArrowRight />
          </div>
          <div className="swiper-button-prev text-white">
            <FaArrowLeft />
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
