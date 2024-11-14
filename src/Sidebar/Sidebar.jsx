import React from 'react';
import { NavLink } from 'react-router-dom';

const SideMenu = ({ toggleMenu }) => {
  return (
    <div>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black opacity-50 z-10"
        onClick={toggleMenu}
      ></div>

      {/* Side Menu */}
      <div 
        className="fixed top-0 right-0 h-full bg-white w-[220px] shadow-lg transition-transform transform translate-x-0 z-[3000]"
      >
        <button 
          onClick={toggleMenu} 
          className="text-white bg-black text-xl  float-right py-[2px] px-[8px] shadow-sm shadow-blue-600 rounded-full focus:outline-none mt-1"
        >
          &times;
        </button>
        <nav className="flex flex-col text-[14px] font-semibold space-y-4 p-4 mt-6">
          <NavLink to="/" className="text-gray-800 hover:text-blue-500">Regular Clean</NavLink>
          <NavLink to="/Deep" className="text-gray-800 hover:text-blue-500">Deep Clean</NavLink>
          <NavLink to="/Move" className="text-gray-800 hover:text-blue-500">Move In & Out Clean</NavLink>
          <NavLink to="/ServiceArea" className="text-gray-800 hover:text-blue-500">Service Areas</NavLink>
          <NavLink to="/Checklist" className="text-gray-800 hover:text-blue-500">Checklist</NavLink>
          <NavLink to="/TermsAndServices" className="text-gray-800 hover:text-blue-500">Terms of Service</NavLink>
          <NavLink to="/BookOnline" className="text-gray-800 hover:text-blue-500">Book Online</NavLink>
          <NavLink to="/Login" className="text-gray-800 hover:text-blue-500">Login</NavLink>
        </nav>
      </div>
    </div>
  );
};

export default SideMenu;
