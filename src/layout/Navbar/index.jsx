import React from 'react'
import { NavLink } from 'react-router-dom'
import "./index.scss"

function Navbar() {
  return (
    <div className='navbar'>
        <li> <NavLink to={"/"}  style={({ isActive }) => {
    return {
      
      color: isActive ? "green" : "white",
      
    };
  }}>Home</NavLink> </li>
        <li><NavLink to={"/about"} style={({ isActive }) => {
    return {
      
      color: isActive ? "green" : "white",
      
    };
  }}>About</NavLink></li>
        <li><NavLink to={"/contact"} style={({ isActive }) => {
    return {
      
      color: isActive ? "green" : "white",
      
    };
  }}>Contact</NavLink></li>
        <li><NavLink to={"/products"} style={({ isActive }) => {
    return {
      
      color: isActive ? "green" : "white",
      
    };
  }}>Products</NavLink></li>
    </div>
  )
}

export default Navbar