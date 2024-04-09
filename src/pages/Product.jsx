import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom'
import Bread from '../componets/Bread/Bread'
import ProductDisplay from '../componets/ProductDisplay/ProductDisplay'
import DescriptionBox from '../componets/DescriptionBox/DescriptionBox'
import RelatedProducts from '../componets/RelatedProducts/RelatedProducts'

function Product() {

  const {all_product} = useContext(ShopContext)
  const {productId} = useParams() ;
  const product = all_product.find((e)=>e.id===Number(productId))
  return (
    <div className='product'>
      <Bread product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
  )
}

export default Product