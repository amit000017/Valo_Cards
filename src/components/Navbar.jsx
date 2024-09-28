import React from 'react'
import "./Navbar.css"
import { FaHome } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className='navv'>
     
        <nav>
        <FaHome className='home' />
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
          </ul>
        </nav>
      </div>
  )
}

export default Navbar
