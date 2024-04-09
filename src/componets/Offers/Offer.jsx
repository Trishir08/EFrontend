import React from 'react'
import './Offer.css'
import exclusive_image from '../data/exclusive_image.png'

function Offer() {
  return (
    <div className='offers'>
      <div className='offers-left'>
          
          <h1>Exclusive Offers for You</h1>
           <p>ONLY ON BEST SELLERS</p>
           <button>Check Now</button>
      </div>
      <div className='offers-right'>
        <img src={exclusive_image} alt=''/>
      </div>
    </div>
  )

}

export default Offer