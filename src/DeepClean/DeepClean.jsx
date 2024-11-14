import React from "react";
import { FaUserCheck, FaTools, FaClipboardCheck, FaShieldAlt, FaFileSignature } from "react-icons/fa"; 
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { TiTick } from "react-icons/ti";
import Division from "../Division/Division";
import GoodHandsSection from "../GoodHandSection/GoodSection";
import TestimonialSlider from "../Testomonials/Testomonials";
import Banner from "../Banner/Banner";
import Accordion from "../FrequentlyQuestion/Question";
import Guaranteed from "../Guarented/Guarented";
import Navbar from "../Navbar/Navbar";
import { useEffect } from "react";
const DeepClean = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
    return (
      
        <>
 <Navbar title={"Every Inch & Corner."} heading={"Deep Cleaning Montreal"}/>
            <div className="flex flex-col gap-x-8 md:flex-row items-start p-10 bg-white text-gray-800 space-y-8 md:space-y-0 md:space-x-12 max-w-5xl mx-auto mt-10">
                {/* Left Text Section */}
                <div className="md:w-1/2 space-y-6">
                    <h1 className="text-4xl font-bold tracking-wide text-[#000000] pb-1">
                    Experience the most detailed deep cleaning
                        <div className='h-[3px] w-[180px] bg-[#94E8FF] mt-5'></div>
                    </h1>

                    <div className="space-y-5 text-[22px] text-[#676C71]">
                    The deep clean package is designed to bring every inch of your home back to new. Equipped with a <a className="text-black font-semibold underline " href="">76-point check-list</a>, our team will complete a thorough cleaning of all areas around the home. We also clean commonly missed areas like underneath furniture, light fixtures, door panels, window frames & much more.
                    </div>

                    <a  href="">
                    <div className=" flex items-center space-x-2 text-sm font-bold mt-3 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300 ">
   
      <span>EXCELLENT</span>

      
      <div className="flex space-x-1 text-yellow-500">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStarHalfAlt />
      </div>
     <span className="text-gray-600">71 reviews</span>
      <img
        src="logo.svg"
        alt="Google"
        className="w-[50px] mt-[3px]"
      />
    
    </div>
    </a>
 </div>
<div className="md:w-[400px] flex justify-center  relative">
 <div className="bg-[#DEF8FF] rounded-lg shadow-lg p-7 w-[290px] mt-7" 
        style={{ boxShadow: "0 4px 6px #CFCFCF" }}  
      >
        <h3 className="text-center text-black font-semibold mb-1 text-[22px]">Deep Clean</h3>
      <p className="text-center text-black mb-1 text-[14px]">Starting at</p>
        <h1 className="text-center text-6xl font-bold text-black mb-2  ">$239</h1>
         <ul className="w-[80%] mx-auto text-gray-600 my-3  text-xs space-y-1">
          <li className="flex gap-1"><TiTick size = {15} className="text-black"/><p className="text-[#000000] font-medium">76-point premium cleaning</p> </li>
          <li className="flex gap-1"><TiTick  size = {15} className="text-black" /><p className="text-[#000000] font-medium">Focus on high-detail areas</p> </li>
          <li className="flex gap-1"><TiTick  size = {15} className="text-black" /><p className="text-[#000000] font-medium">Our most in-depth cleaning</p></li>
          <li className="flex gap-1"><TiTick  size = {15} className="text-black"/><p className="text-[#000000] font-medium"> Backed by 24-hour guarantee </p></li>
          <li className="flex gap-1"><TiTick  size = {15} className="text-black"/><p className="text-[#000000] font-medium"> For furnished properties</p></li>
        </ul>
        <button className="w-[120px] bg-blue-500 text-white py-[5px] rounded-lg hover:bg-blue-600 font-bold mt-3 ml-12">Get Quote</button>
         </div>
         </div>
         </div>
        
         <Division/>
         <GoodHandsSection/>
         <TestimonialSlider/>
         <Guaranteed/>
         <Banner/>
         <Accordion/>
        </>
    );
}

export default DeepClean;
