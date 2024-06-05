import React from 'react'

const Home = () => {
  return (
    <div className='h-80 w-full md:h-80 md:min-h-screen  flex flex-col justify-center items-center lg:px-32 px-5 bg-[url(https://t3.ftcdn.net/jpg/05/65/96/56/240_F_565965639_dZBDOyf2wkK8SGmaAkJz3zme37mjgaRm.jpg)] bg-contain md:bg-cover bg-no-repeat wfull'>
    
      <div className='w-full sm:mt-20 lg:w-2/3 space-y-5'>
            <h1 className='font-Poppins text-orange-500 sm:text-xl mt-40 md:text-5xl md:mt-0 font-semibold tracking-wide md:leading-tight leading-snug'>¡Te ayudamos a impulsar tu negocio!</h1>
            <p className='text-sm md:w-1/2 h-80 mt-1 font-Poppins text-orange-500 md:text-3xl font-bold'>Una Web para alcanzar tus logros.</p> 
       </div> 
      </div>
    
  )
}

export default Home