import React from 'react'
import Hero from '../componets/Hero/Hero'
import Popular from '../componets/Popular/Popular'
import Offer from '../componets/Offers/Offer'
import NewCollections from '../componets/NewCollections/NewCollections'
import Newsletter from '../componets/Newsletter/Newsletter'

function Shop() {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offer/>
      <NewCollections/>
      <Newsletter/>
    </div>
  )
}

export default Shop