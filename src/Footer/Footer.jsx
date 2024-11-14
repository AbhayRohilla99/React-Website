// Footer.js
import React from 'react';
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return(
    
    <footer className="bg-black text-white py-10 px-4 mt-14">
  <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
    <div className="mb-4 md:mb-0">
      <NavLink to="/Shine">
        <h2 className="text-4xl font-bold text-[#94E8FF]">SHINE</h2>
        </NavLink>
      <div className="flex space-x-4 mt-[20px]">
        <a href="https://www.facebook.com/shinecleaningmtl/">
        <FaFacebookF className="text-black border rounded-full bg-gray-600 px-[5px] text-[25px]"/>
        </a>
        <a href="https://mail.google.com">
        <MdOutlineEmail className="text-black border rounded-full bg-gray-600 px-[5px] text-[25px]"/>
        </a>
        <a href="https://in.pinterest.com/">
        <FaPinterest  className="text-black border rounded-full bg-gray-600 px-[5px] text-[25px]"/>
        </a>
      </div>
    </div>
    
    <div className="mb-4 md:mb-0">
      <h3 className="font-semibold mb-2">NAVIGATION</h3>
      <ul className="text-gray-400 space-y-1">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/Package">Packages</NavLink></li>
        <li><NavLink to="/Contact">Contact Us</NavLink></li>
        <li><NavLink to="/Checklist">Checklist</NavLink></li>
        <li><NavLink to="/TermsAndServices">Terms of Service</NavLink></li>
        <li><NavLink to="/BookOnline">Book Online</NavLink></li>
      </ul>
    </div>

    <div className="mb-4 md:mb-0">
      <h3 className="font-semibold mb-2">PACKAGES</h3>
      <ul className="text-gray-400 space-y-1">
        <li><NavLink to="/">Regular Clean</NavLink></li>
        <li><NavLink to="/Deep">Deep Clean</NavLink></li>
        <li><NavLink to="/Move">Move In & Out Clean</NavLink></li>
      </ul>
    </div>

    <div className="mb-4 md:mb-0">
      <a href="http://localhost:5173/Contact">
      <h3 className="font-semibold mb-2 cursor-pointer">CONTACT US</h3>
      <p className="text-gray-400 cursor-pointer">(438) 806-0628</p>
      </a>
      <div className='mt-4'>
      <NavLink to="/QuoteForm" className="bg-[#1D4ED8] text-white py-2 px-4 rounded hover:bg-blue-600">
        Get a Quote
      </NavLink>
      </div>
    </div>
  </div>
  
  <div className="mt-10 border-t border-gray-700 pt-4 text-center">
    <p className="text-gray-400 text-sm">
      Copyright © 2024 bookshine.ca All rights reserved. Made with <span className="text-blue-500">💙</span> by Courimo
    </p>
  </div>
</footer>

  )
};

export default Footer;
