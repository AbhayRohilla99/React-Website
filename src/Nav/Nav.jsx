import React from "react"
import SideMenu from '../Sidebar/Sidebar';
import { useState,useEffect } from 'react';
import { NavLink } from "react-router-dom";
const Nav = () => {
    const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for SideMenu toggle

  // Function to handle scroll
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen); // Toggle the side menu

return (
<div className={`fixed top-0 w-full flex justify-between items-center px-6 py-4 z-[2000] transition-colors duration-300 ${isScrolled ? 'bg-white text-black' : 'bg-transparent text-black-900'}`}>
        <NavLink to="/Shine">
        <div className="text-3xl font-bold">SHINE</div>
        </NavLink>
        <nav className="flex space-x-8 text-lg font-medium">
          <NavLink to="/" className="hover:text-gray-300 transition-colors duration-300">Regular Clean</NavLink>
          <NavLink to="/Deep" className="hover:text-gray-300 transition-colors duration-300">Deep Clean</NavLink>
          <NavLink to="/Move" className="hover:text-gray-300 transition-colors duration-300">Move In & Out Clean</NavLink>
          <NavLink to="/Checklist" className="hover:text-gray-300 transition-colors duration-300">Checklist</NavLink>
        </nav>
        <div className="flex space-x-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Get Quote</button>
          <button onClick={toggleMenu} className="hover:text-gray-300 transition-colors duration-300">Menu</button>
        </div>
        {isMenuOpen && <SideMenu toggleMenu={toggleMenu} />}
      </div>
 )
}

export default Nav;