import React from "react";
import { FaUserCheck, FaTools, FaClipboardCheck, FaShieldAlt, FaFileSignature } from "react-icons/fa"; 
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { TiTick } from "react-icons/ti";
import Division from "../Division/Division";
import GoodHandsSection from "../GoodHandSection/GoodSection";
import TestimonialSlider from "../Testomonials/Testomonials";
import Guaranteed from "../Guarented/Guarented";
import Banner from "../Banner/Banner";
import Accordion from "../FrequentlyQuestion/Question";
import Navbar from "../Navbar/Navbar";
import { useEffect } from "react";
const Move = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  })
    return(
 <>

<Navbar title={"Our Most Detailed Package."} heading={"Move In & Out Cleaning Montreal"}/>
 <div className="flex flex-col gap-x-8 md:flex-row items-start p-10 bg-white text-gray-800 space-y-8 md:space-y-0 md:space-x-12 max-w-5xl mx-auto mt-10">
                {/* Left Text Section */}
                <div className="md:w-1/2 space-y-6">
                    <h1 className="text-4xl font-bold tracking-wide text-[#000000] pb-1">
                    The highest quality clean on your moving day.
                        <div className='h-[3px] w-[180px] bg-[#94E8FF] mt-5'></div>
                    </h1>

                    <div className="space-y-5 text-[22px] text-[#676C71]">
                    The Move In/Out Package was designed to take a property that was once lived in, and restore it back to brand new before the new home owners/tenants move in.<a className="text-black font-semibold underline " href="">Our 62-point checklist</a>  guarantees every inch of the property gets deep cleaned with a focus on detail.
                    </div>
                    <div className="mt-10 text-[17px] font-[400px] font-serif">
                        <p>Need a little more or less? Contact us to discuss custom options & extra add-ons</p>
                    </div>
</div>
<div className="md:w-[400px] flex justify-center relative">
 <div className="bg-[#FFF7DF] rounded-lg shadow-lg p-7 w-[290px] mt-5" 
        style={{ boxShadow: "0 4px 6px #CFCFCF" }}  
      >
        <h3 className="text-center text-black font-semibold mb-1 text-[22px]">Move In/Out Clean</h3>
      <p className="text-center text-black mb-1 text-[14px]">Starting at</p>
        <h1 className="text-center text-6xl font-bold text-black mb-2  ">$219</h1>
         <ul className="w-[80%] mx-auto text-gray-600 my-3  text-xs space-y-1">
          <li className="flex gap-1"><TiTick size = {15} className="text-black"/><p className="text-[#000000] font-medium">62-point premium cleaning</p> </li>
          <li className="flex gap-1"><TiTick  size = {15} className="text-black" /><p className="text-[#000000] font-medium">Inside all cabinets & drawers</p> </li>
          <li className="flex gap-1"><TiTick  size = {15} className="text-black" /><p className="text-[#000000] font-medium">Our most detailed cleaning</p></li>
          <li className="flex gap-1"><TiTick  size = {15} className="text-black"/><p className="text-[#000000] font-medium">Backed by 24-hour guarantee</p></li>
          <li className="flex gap-1"><TiTick  size = {15} className="text-black"/><p className="text-[#000000] font-medium">For unfurnished properties</p></li>
        </ul>
        <button className="w-[120px] bg-blue-500 text-white py-[5px] rounded-lg hover:bg-blue-600 font-bold mt-3 ml-12">Learn More</button>
         </div>
         </div>
         </div>
         <Division/>
         <GoodHandsSection/>
         <TestimonialSlider/>
         <Guaranteed/>
         <Banner/>
         < Accordion/>
 </>

    )
}

export default Move;