import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';

const EarbudsBanner = ({earbudsBanner}) => {
   const { name, image} = earbudsBanner;
  
  return (
    <div className='earbud-banner-container'>
      <div className='banner-desc'>
        <div className="left">
          <p>Shop &gt; earbuds</p>
          <h3>Ear</h3>
          <h3>Buds</h3>
          <p></p>
        </div>
        <div className="right">
          <p>{name}</p>
          <h3>E-Choice</h3>
          <p>Best value earbuds this summer!!</p>
          {/* <Link href={`/product/${product}`}>
            <button type='button'>{buttonText}</button>
          
          </Link> */}
        </div>
        <img src={urlFor(image && image[1])} alt="" className="banner-banner-image" />
      </div>
    </div>

  
  )
}

export default EarbudsBanner