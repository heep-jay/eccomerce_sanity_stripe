import React from 'react';
import Link from 'next/link';
import Cart from './Cart';
import { AiOutlineShopping } from 'react-icons/ai';
import { useStateContext } from '../Context/StateContext';

const Navbar = () => {
  const {qty, showCart, setShowCart, totalQuantities} = useStateContext();
  console.log(totalQuantities)
  return (
    <div className="navbar-container">
      <p className='logo'>
        <Link href='/'> Emperor Headphones</Link>
      </p>
      <button className="cart-icon" onClick={()=> setShowCart(true)}>
        <AiOutlineShopping/>
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>
      {showCart && <Cart/>}
      
    </div>
  )
}

export default Navbar