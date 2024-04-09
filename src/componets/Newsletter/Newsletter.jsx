import React from 'react'
import './Newsletter.css'
function Newsletter() {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive offers on Email</h1>
        <p>Subscribe to our newsletter and Stay updated</p>
        <div>
            <input type='email' placeholder='Enter your Email id'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default Newsletter