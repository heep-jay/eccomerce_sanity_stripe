import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';

const ProductBanner = ({productBanner}) => {
   const { name, image} = productBanner;
   console.log(image)
  return (
    <div className='product-banner-container'>
      <div className='banner-desc'>
        <div className="left">
          <p>Shop > smartwatches</p>
          <h3>SMART</h3>
          <h3>WATCHES</h3>
          <p></p>
        </div>
        <div className="right">
          <p>{name}</p>
          <h3>Good Value</h3>
          <p>Best Smartwatches in the market right now</p>
          {/* <Link href={`/product/${product}`}>
            <button type='button'>{buttonText}</button>
          
          </Link> */}
        </div>
        <img src={urlFor(image && image[1])} alt="" className="footer-banner-image" />
      </div>
    </div>

  
  )
}

export default ProductBanner