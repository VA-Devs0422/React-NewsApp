import React, { useState } from 'react'
import './Navbar.css'
const Navbar = () => {
    let [open,setIsOpen]=useState(false)
    const toggleMenu = () => setIsOpen(prev => !prev);
  return (
    <nav className='navbar'>
        <div className="logo">NewsNCoffee</div>
            <form action="" className={`input ${open ? 'open' : ''}`}>
                <input type="text" />
            </form>
        <div className={`navlink ${open ? 'open' : ''}`}>
            <a href="">Home</a>
            <a href="">Politics</a>
            <a href="">Entertainment</a>
            <a href="">Sports</a>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>
    </nav>
  )
}

export default Navbar