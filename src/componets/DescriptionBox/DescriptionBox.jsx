import React from 'react'
import './DescriptionBox.css'

function DescriptionBox() {
  return (
    <div className='descriptionbox'>
        <div className='descriptionbox-navigator'>
            <div className='descriptionbox-navigator-box'>Description</div>
            <div className='descriptionbox-navigator-box fade'>Reviews (100)</div>
        </div>

        <div className='descriptionbox-description'>
            <p>
            An e-commerce website is one that allows people to buy and sell physical goods, services, and digital products over the internet rather than at a brick-and-mortar location. Through an e-commerce website, a business can process orders, accept payments, manage shipping and logistics, and provide customer service.
            </p>
            <p>
            A website that allows people to buy and sell physical goods, services, and digital products over the internet rather than at a brick-and-mortar location. Through an e-commerce website, a business can process orders, accept payments, manage shipping and logistics, and provide customer service.
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox