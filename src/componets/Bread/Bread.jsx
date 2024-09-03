import React from 'react'
import './Bread.css'
import arrow_icon from '../data/breadcrum_arrow.png'

function Bread(props) {
    const {product} = props ; 
  return (
    <div className='breadcrum'>
        HOME
        <img src={arrow_icon} alt=''/> SHOP <img src={arrow_icon} alt=''/> {product?.category} <img src={arrow_icon} alt=''/> {product?.name}
    </div>
  )
}

export default Bread