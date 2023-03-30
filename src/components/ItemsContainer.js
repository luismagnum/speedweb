import React from 'react';
import Items from './Items';
import { PRODUCTOS, SERVICIOS, EMPRESA, CONTACTO } from './Menu';

const ItemsContainer = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16'>
      <Items Links={PRODUCTOS} title= "PRODUCTOS"/>
      <Items Links={SERVICIOS} title= "SERVICIOS" /> 
      <Items Links={EMPRESA} title="EMPRESA"/>
      <Items Links={CONTACTO} title= "CONTACTO"/>
    </div>
  )
}

export default ItemsContainer
