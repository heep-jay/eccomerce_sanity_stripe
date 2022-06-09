import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';

const HeadBanner = ({headBanner}) => {
   const { name, image} = headBanner;
   console.log(image)
  return (
    <div className='head-banner-container'>
      <div className='banner-desc'>
        <div className="left">
          <p>Shop &gt; headphones</p>
          <h3>Head</h3>
          <h3>Phones</h3>
          <p></p>
        </div>
        <div className="right">
          <p>{name}</p>
          <h3>Good Music</h3>
          <p>Enjoy good music with every step you take!!</p>
          {/* <Link href={`/product/${product}`}>
            <button type='button'>{buttonText}</button>
          
          </Link> */}
        </div>
        <img src={urlFor(image && image[0])} alt="" className="footer-banner-image" />
      </div>
    </div>

  
  )
}

export default HeadBanner