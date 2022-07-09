import React from 'react'
import './Header.css'


const Header = () => {
  return (
    <div className="header">
      
      <img  className="logo"src='../assets/logo.png' alt="" /> 
      <ul className="header-menu">
        <li>Home</li>
        <li>Programs</li>
        <li>Why</li>
        <li>Plans</li>
        <li>Testimonials</li>
      </ul>
    </div>
  )
}

export default Header
