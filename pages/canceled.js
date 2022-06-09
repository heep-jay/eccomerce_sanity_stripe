import React from 'react'
import { useStateContext } from '../Context/StateContext';
import {  AiOutlineShopping } from 'react-icons/ai';
import Link from 'next/link';


const Canceled = () => {

  const {setShowCart} = useStateContext();
  
  return (
  
      <div className="product-container">
        
          <div className="empty-cart">
            <AiOutlineShopping/>
            <h3>Go back to shopping</h3>
            <Link href="/">
              <button className="btn"
              type='button'
                onClick={()=> setShowCart(false)}>
                Continue shopping
              </button>
            </Link>
          </div>
      
         </div>
          
   
  )
}

export default Canceled