import React, { useState } from 'react';
import Link from 'next/link';
import Cart from './Cart';
import { AiOutlineShopping } from 'react-icons/ai';
import {HiMenuAlt4, HiX} from 'react-icons/hi'
import { useStateContext } from '../Context/StateContext';

const Navbar = () => {
  const {qty, showCart, setShowCart, totalQuantities} = useStateContext();
  console.log(totalQuantities)

  const [toggle, setToggle] = useState(false);
  return (
    <>
    <nav className="navbar-container">
      <div className='navbar-logo'>
        <p className='logo'>
          <Link href='/'> E-Gadgets</Link>
        </p>
      </div>
      
      <ul className="navbar-mid">
        {['smartwatches', 'headphones', 'speakers'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <Link href={`/${item}`}>{item}</Link>
          </li>
        ))}
      </ul>
     
      
      <div className='navbar-cart'>
        <button className="cart-icon" onClick={()=> setShowCart(true)}>
          <AiOutlineShopping/>
          <span className="cart-item-qty">{totalQuantities}</span>
        </button>
        {showCart && <Cart/>}
      </div>
      
      
   


<div className="navbar-menu">
  
<HiMenuAlt4 onClick={() => setToggle(true)} />

{toggle && (
  <div>
    <HiX onClick={() => setToggle(false)} />
    
    <ul>
        {[''].map((item) => (

              <li key={item}>
                <a href={`/${item}`} onClick={() => setToggle(false)}>
                  Home
                </a>
              </li>
          ))}
      {['smartwatches', 'headphones', 'speakers'].map((item) => (

        <li key={item}>
          <a href={`/${item}`} onClick={() => setToggle(false)}>
            {item}
          </a>
        </li>
      ))}
    </ul>

      
  </div>
)}
</div>
</nav>
</>
  )
}

export default Navbar