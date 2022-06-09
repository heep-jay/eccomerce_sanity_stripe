import React from 'react';
import { Product,HeadBanner } from '../Components';

import { client, urlFor } from '../lib/client';



const Headphones = ({product, watches }) => {
  const newProducts = product.slice(0,7);
  
  return (
    <>
    <HeadBanner headBanner={product.length && product[0]}/>

      <div className='products-heading'>
        <h2>Headphones</h2>
        <p>Headphones of many variations passages</p>
      </div>
      <div className='products-container'>
        {newProducts?.map(
          (prod)=> <Product key={prod._id} product={prod}/>)}
      </div>
      <div className='maylike-products-wrapper'>
            <h2>You may also like this watches</h2>
            <div className='marquee'>
                 <div className='maylike-products-container track'>
                    {
                        watches?.map((item)=>(
                            <Product key={item._id} product={item}/>
                            
                        ))
                    }
                 </div>
            </div>
        </div>
      {/* <FooterBanner footerBanner={bannerData && bannerData[0]}/> */}

      
      
    </>
  )
}
export const getServerSideProps = async () => {
  

  const productBannerQuery = `*[_type == "product" && category == 'headphones']`
  const product = await client.fetch(productBannerQuery);

  const watchesQuery = `*[_type == "product" && category == 'watches']`
  const watches = await client.fetch(watchesQuery);
 
  return{
    props: {product, watches}
    
  }

}

export default Headphones