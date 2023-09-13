import React from 'react';
import carrito from './assets/carrito.svg';
import './CartWidget.css'

const CartWidget = () => {
  return (
    <>
    <div className='numeroCarrito'>
    <img src={carrito} alt='carrito de compras' width={50} />
    0 
    </div>
    </>
  )
}

export default CartWidget;