// GoodHandsSection.js
import React from 'react';
import { FaUserCheck, FaTools, FaClipboardCheck, FaShieldAlt, FaFileSignature } from 'react-icons/fa';

const GoodHandsSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-start p-10 bg-white text-gray-800 space-y-8 md:space-y-0 md:space-x-12 max-w-5xl mx-auto mt-10 gap-x-7">
      {/* Left Text Section */}
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-4xl font-bold tracking-wide text-[#000000]  pb-1">
        YOU’RE IN GOOD HANDS
         <div className='h-[4px] w-[150px] bg-[#94E8FF] mt-1'></div>
        </h1>
       
        <div className="space-y-5">
          <div className="flex items-start">
            <img src="goodhand.png" className="mr-4 w-[40px] h-[40px] mt-2" />
            <p className="text-lg font-semibold">
              Experienced Staff – <span className="font-normal text-[#000000]">all teams are highly experienced & trained on our checklists and protocols</span>
            </p>
          </div>
          <div className="flex items-start">
          <img src="goodhand1.png" className="mr-4 w-[40px] h-[40px] mt-2" />
            <p className="text-lg font-semibold">
              Fully Equipped – <span className="font-normal text-[#000000]">we come fully equipped with all products and equipment including a vacuum</span>
            </p>
          </div>
          <div className="flex items-start">
          <img src="goodhand2.png" className="mr-4 w-[40px] h-[40px] mt-2" />
            <p className="text-lg font-semibold">
              Premium Quality – <span className="font-normal text-[#000000]">our 76-point checklist delivers the same premium cleaning every single time</span>
            </p>
          </div>
          <div className="flex items-start">
          <img src="goodhand3.png" className="mr-4 w-[40px] h-[40px] mt-2" />
            <p className="text-lg font-semibold">
              Guaranteed Satisfaction – <span className="font-normal text-[#000000]">all packages are backed by our guarantee of quality</span>
            </p>
          </div>
          <div className="flex items-start">
          <img src="goodhand4.png" className="mr-4 w-[40px] h-[40px] mt-2" />
            <p className="text-lg font-semibold">
              Insured & Vetted – <span className="font-normal text-[#000000]">all team members have been police checked, thoroughly vetted, and insured.</span>
            </p>
          </div>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="md:w-[400px] relative">
        <img 
          src="Good.png"
          alt="Kitchen"
          className="rounded-lg shadow-lg w-full h-[400px] ml-14 mt-6"
        />
       
      </div>
    </div>
  );
};

export default GoodHandsSection;
