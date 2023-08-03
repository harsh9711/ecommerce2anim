import React from 'react'
import {NavLink} from "react-router-dom"
import {PiShoppingCartFill} from 'react-icons/pi';
import "../Styles/Header.css"
import {BiSolidLogInCircle} from 'react-icons/bi';

const Header = () =>
{
  return (
    <>
    <div className="navbar">
    {/* <div className="navbar-left"> */}
    
      <li>
        <NavLink to = "/home" className="navbar-left">
            Home
            <span>|</span>
        </NavLink>
      </li>
      <li>
        <NavLink to = "/contact" className="navbar-left">
            Contact<span>|</span>
        </NavLink>
      </li>
      <li>
        <NavLink to = "/about" className="navbar-left">
            About<span>|</span>
        </NavLink>
      </li>
      <li>
        <NavLink to = "/product" className="navbar-left">
            Product <span>|</span>
        </NavLink>
      </li>
      {/* <div className="navbar-right"> */}
      <li>
        <NavLink to = "/About" className="navbar-right">
        Log in
       <BiSolidLogInCircle className="icons"/>
        </NavLink>
      </li>
      {/* <div className="navbar-cart"> */}
      <li>
        <NavLink to = "/" className="navbar-right">
       <PiShoppingCartFill className="icons" />
        </NavLink>
      </li>
      {/* </div> */}
      {/* </div> */}
      {/* </div>  */}
     
    </div>
    </> 
  )
}

export default Header
