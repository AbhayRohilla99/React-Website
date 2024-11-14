import React, { useState, useEffect } from 'react';
import SideMenu from '../Sidebar/Sidebar';
import { NavLink } from 'react-router-dom';
import Nav from '../Nav/Nav';


const Navbar = ({heading,title}) => {
  
  return (
    <>
  
    <div className="relative h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('Navbar.jpg')" }}>
      {/* Overlay for opacity */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

     <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 z-20">
        <p className='font-bold font-2xl italic'>{title}</p>
        <h1 className="text-5xl md:text-6xl font-bold mb-4">{heading}</h1>
       

       
        <div className="flex space-x-4">
          <NavLink to="/QuoteForm" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold">
            Get a Free Quote
          </NavLink>
          <a href="tel:438-806-0628" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold">
            438-806-0628
          </a>
        </div>
      </div>

     
   
    </div>
    </>
  );
};

export default Navbar;
