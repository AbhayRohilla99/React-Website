import React from "react";
import { NavLink } from "react-router-dom";


   const Banner = () => {
     return (
      <div className="flex items-center justify-around bg-[#8ee7ff] px-6 py-8">
      <h2 className="text-4xl font-extrabold text-white leading-tight max-w-md ">
        READY FOR THE BEST CLEANING SERVICE IN MONTREAL?
      </h2>
      <NavLink to="/QuoteForm" className="bg-black text-white text-lg px-6 py-3 rounded-md font-semibold hover:bg-gray-800 transition-colors duration-300">
        Get Free Quote
      </NavLink>
    </div>
     );
   };
   
  
   

export default Banner;