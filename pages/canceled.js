import React from 'react'
import { useStateContext } from '../Context/StateContext';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping} from 'react-icons/ai';
import Link from 'next/link';


const canceled = () => {

  const {setShowCart, cartItems, totalPrice,
    totalQuantities, toggleCartItemQuanitity, onRemove} = useStateContext();
    console.log(cartItems);
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

export default canceled