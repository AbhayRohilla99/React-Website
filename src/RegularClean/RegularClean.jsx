import React from "react";
import Division from "../Division/Division";
import GoodHandsSection from "../GoodHandSection/GoodSection";
import ClientReviews from "../Testomonials/Testomonials";
import Banner from "../Banner/Banner";
import Accordion from "../FrequentlyQuestion/Question";
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { TiTick } from "react-icons/ti";
import Navbar from "../Navbar/Navbar"
import PricingCard from "../PricingCard/Pricing";
import Nav from "../Nav/Nav";
import { useEffect } from "react";
const RegularClean = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  });
    return(
        <>
       
       <Navbar title={"Never Clean Again."} heading={"Regular Cleaning Montreal"}/>
       <div className="flex flex-col gap-x-8 md:flex-row items-start p-10 bg-white text-gray-800 space-y-8 md:space-y-0 md:space-x-12 max-w-5xl mx-auto mt-10">
                {/* Left Text Section */}
                <div className="md:w-1/2 space-y-6">
                    <h1 className="text-4xl font-bold tracking-wide text-[#000000] pb-1">
                    Experience the best house cleaning service
                        <div className='h-[3px] w-[180px] bg-[#94E8FF] mt-5'></div>
                    </h1>

                    <div className="space-y-5 text-[22px] text-[#676C71]">
                    Shine doesn’t just vacuum and dust homes — we clean, restore, and maintain them throughout the year. Each package includes complimentary extras to ensure your home is spotless all year round. Get in touch with us today to ask any questions or book your cleaning.
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
 
   <img src="regular.jpg"
  className="mt-10"
 
/>
         </div>
         </div>




        <PricingCard/>
        <Division/>
        <GoodHandsSection/>
        <ClientReviews/>
        <Banner/>
        <Accordion/>
       

        </>
        
    )
}
export default RegularClean;