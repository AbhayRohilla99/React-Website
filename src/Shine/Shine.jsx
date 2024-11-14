import React, { useEffect } from "react";
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import Navbar from "../Navbar/Navbar";
import PricingCard from "../PricingCard/Pricing";
import Division from "../Division/Division";
import GoodHandsSection from "../GoodHandSection/GoodSection";
import ClientReviews from "../Testomonials/Testomonials";
import Accordion from "../FrequentlyQuestion/Question";

const Shine = () => {
    useEffect(() => {
        window.scrollTo(0,0);
    })
    return(
        <>
        
        <Navbar heading={"Home Cleaning Montreal"}></Navbar>
        <div className="flex flex-col md:flex-row items-start p-10 bg-white text-gray-800 space-y-8 md:space-y-0 md:space-x-12 max-w-5xl mx-auto mt-10 gap-x-7">
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

      {/* Right Image Section */}
      <div className="md:w-[400px] relative">
        <img 
          src="shine-2.png"
          alt="Kitchen"
          className="rounded-lg shadow-lg w-full h-[400px] ml-14 mt-6"
        />
       
      </div>
    </div>

    <div className="text-center mt-4">
        <h1 className="font-bold text-[33px]">Result-focused cleaning packages</h1>
        <p className="mt-2 text-gray-500">Each package has been carefully designed to deliver the outcome you’re looking for.</p>
    </div>
    <PricingCard/>
    <Division/>
    <GoodHandsSection/>
    <ClientReviews/>
    <Accordion/>
        </>
    )
}

export default Shine;