import React from 'react';
import { Product, EarbudsBanner} from '../Components';
// import ProductBanner from '../Components/ProductBanner';
import { client, urlFor } from '../lib/client';



const Earbuds = ({product, headphones }) => {
  
  const newProducts = product.slice(0,5);

  return (
    <>
    <EarbudsBanner earbudsBanner={product.length && product[5]}/>
    

      <div className='products-heading'>
        <h2>Earbuds</h2>
        <p>Earbuds of many variations passages</p>
      </div>
      <div className='products-container'>
        {newProducts?.map(
          (prod)=> <Product key={prod._id} product={prod}/>)}
      </div>

      <div className='maylike-products-wrapper'>
            <h2>You may also like this Headphones</h2>
            <div className='marquee'>
                 <div className='maylike-products-container track'>
                    {
                        headphones?.map((item)=>(
                            <Product key={item._id} product={item}/>
                            
                        ))
                    }
                 </div>
            </div>
        </div>
      {/* <FooterBanner footerBanner={bannerData && bannerData[0]}/>
       */}
    </>
  )
}
export const getServerSideProps = async () => {
 

  const productBannerQuery = `*[_type == "product" && category == 'earbuds']`
  const product = await client.fetch(productBannerQuery);

  const headQuery = `*[_type == "product" && category == 'headphones']`
  const headphones = await client.fetch(headQuery);

  return{
    props: {product, headphones}
    
  }

}

export default Earbuds