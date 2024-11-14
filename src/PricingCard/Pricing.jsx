import React from 'react';
import { NavLink } from 'react-router-dom';
const PricingCard = () => {
  return (
    <div className="flex justify-center gap-20 p-10 mt-10">
     
      <div 
        className="bg-[#E5F9F2] rounded-lg shadow-lg p-7 w-60" 
        style={{ boxShadow: "0 4px 6px #CFCFCF" }}  
      >
        <h3 className="text-center text-gray-600 font-bold mb-1 text-xs">BEST VALUE</h3>
        <h2 className="text-center text-lg font-bold mb-1">Weekly Package</h2>
        <p className="text-center text-gray-600 mb-1 text-xs">Starting at</p>
        <h1 className="text-center text-6xl font-bold text-black mb-2">$97</h1>
        <p className="text-center text-gray-600 mb-3 text-xs">Per appointment</p>
        <ul className="text-gray-600 mb-3 text-xs space-y-1">
          <li>✔ Premium cleaning every week</li>
          <li>✔ 2x/year Deep Cleaning included</li>
          <li>✔ 2x/year Interior Fridge Cleaning</li>
          <li>✔ 2x/year Interior Oven Cleaning</li>
        </ul>
        <NavLink to="/QuoteForm" className="w-[120px] bg-blue-500 text-white py-[5px] rounded-lg hover:bg-blue-600 font-bold mt-4 ml-7">Get Quote</NavLink>
      </div>

      
      <div 
        className="bg-[#E5F9F2] rounded-lg shadow-lg p-7 w-60" 
        style={{ boxShadow: "0 4px 6px #CFCFCF" }}  
      >
        <h3 className="text-center text-blue-600 font-bold mb-1 text-xs">MOST POPULAR</h3>
        <h2 className="text-center text-lg font-bold mb-1">Biweekly Package</h2>
        <p className="text-center text-gray-600 mb-1 text-xs">Starting at</p>
        <h1 className="text-center text-6xl font-bold text-black mb-2">$107</h1>
        <p className="text-center text-gray-600 mb-3 text-xs">Per appointment</p>
        <ul className="text-gray-600 mb-3 text-xs space-y-1">
          <li>✔ Premium cleaning every 2 weeks</li>
          <li>✔ 1x/year Deep Cleaning included</li>
          <li>✔ 2x/year Interior Fridge Cleaning</li>
          <li>✔ 2x/year Interior Oven Cleaning</li>
        </ul>
        <NavLink to="/QuoteForm" className="w-[120px] bg-blue-500 text-white py-[5px]  rounded-lg hover:bg-blue-600 font-bold ml-7 mt-1" >Get Quote</NavLink>
      </div>

   
      <div 
        className="bg-[#E5F9F2] rounded-lg shadow-lg p-7 w-60" 
        style={{ boxShadow: "0 4px 6px #CFCFCF" }}  
      >
        <h3 className="text-center text-gray-600 font-bold mb-1 text-xs">BUDGET FRIENDLY</h3>
        <h2 className="text-center text-lg font-bold mb-1">Monthly Package</h2>
        <p className="text-center text-gray-600 mb-1 text-xs">Starting at</p>
        <h1 className="text-center text-6xl font-bold text-black mb-2">$117</h1>
        <p className="text-center text-gray-600 mb-3 text-xs">Per appointment</p>
        <ul className="text-gray-600 mb-3 text-xs space-y-1">
          <li>✔ Premium cleaning every 4 weeks</li>
          <li>✔ 1x/year Deep Cleaning 20% off</li>
          <li>✔ 1x/year Interior Fridge Cleaning</li>
          <li>✔ 1x/year Interior Oven Cleaning</li>
        </ul>
        <NavLink to="/QuoteForm" className="w-[120px] bg-blue-500 text-white py-[5px] rounded-lg hover:bg-blue-600 font-bold mt-3 ml-7">Get Quote</NavLink>
      </div>
    </div>
  );
}

export default PricingCard;
