import React, { useContext, useState } from 'react'
import logo from "../data/logo.png"
import cart_icon from "../data/cart_icon.png"
import './Navbar.css'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';

function Navbar() {

  const [menu , setMenu] = useState("shop") ;
  const {getTotalCartItems} = useContext(ShopContext) ; 

  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt='cart-icon'/>
            <p>SHOPIFY</p>
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("shop")}}><Link to='/' style={{textDecoration : 'none'}} >Shop</Link> {menu==="shop" ? <hr/>: <></>} </li>
            <li onClick={()=>{setMenu("mens")}}><Link to='/mens' style={{textDecoration : 'none'}} >Mens</Link>{menu==="mens" ? <hr/>: <></>}</li>
            <li onClick={()=>{setMenu("women")}}><Link to='/womens' style={{textDecoration : 'none'}}>Women</Link>{menu==="women" ? <hr/>: <></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link to='/kids' style={{textDecoration : 'none'}}>Kids</Link>{menu==="kids" ? <hr/>: <></>}</li>
        </ul>
        <div className='nav-login-cart'>
            {
              localStorage.getItem('auth-token') ? 
              <button onClick={()=>{localStorage.removeItem('auth-token') ;
              window.location.replace('/')}}>Log Out</button> : 
              <Link to='/login'><button>Login</button></Link>
            }
            
            <Link to='/cart'>
            <img src={cart_icon} alt='cart-icon'/>
            </Link>
            <div className='nav-cart-count'>{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar