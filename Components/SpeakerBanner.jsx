import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';

const SpeakerBanner = ({speakerBanner}) => {
   
   const { name, image} = speakerBanner;
  
  return (
      
    <div className='speaker-banner-container'>
      <div className='banner-desc'>
        <div className="left">
          <p>Shop &gt; speakers</p>
          <h3>Portable</h3>
          <h3>Speakers</h3>
          <p></p>
        </div>
        <div className="right">
          <p>{name}</p>
          <h3>E-Choice</h3>
          <p>Speakers with variations of passages!</p>
          {/* <Link href={`/product/${product}`}>
            <button type='button'>{buttonText}</button>
          
          </Link> */}
        </div>
        <img src={urlFor(image && image[1])} alt="" className="banner-banner-image" />
      </div>
    </div>

  
  )
}

export default SpeakerBanner