import React, { useEffect } from "react";
import { useState } from "react";
const BookOnline = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  })
  return (
    <div className="flex flex-col md:flex-row p-8 bg-gray-50 max-w-5xl mx-auto space-y-8 md:space-y-0 md:space-x-8">
      {/* Left Column - Booking Form */}
      <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Complete your booking</h2>
        <p className="text-gray-500 mb-8">A few details and we can complete your booking</p>

        {/* Select Location */}
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">Select Location</label>
          <select className="w-[300px] p-3 border border-gray-300 rounded-lg">
            <option>Ahuntsic-Cartierville</option>
            {/* Add more locations as needed */}
          </select>
        </div>

        {/* Select a Service Type */}
        <div className="mb-6 w-[400px]" >
          <label className="block text-gray-700 font-semibold mb-2">Select a Service Type</label>
          <p className="text-gray-400 mb-2 text-sm">Services can be changed at any time from your customer dashboard</p>
          <select className="w-[300px] p-3 border border-gray-300 rounded-lg">
            <option>Regular Clean</option>
            {/* Add more service types as needed */}
          </select>
        </div>
        <div>
        <h3>Select Package</h3>
        <p className="text-[14px] mb-3 mt-3 text-gray-500">No commitment, cancel anytime. Recurring discounts apply after the first appointment</p>
        <div className="flex gap-4 mb-3">
        <button  className="border border-gray-600 px-2 py-1 bg-[#E5ECF2] text-[14px]">One Time</button>
        <button  className="border border-gray-600 px-2 py-1 bg-[#E5ECF2] text-[14px]">Weekly Package</button>
        <button  className="border border-gray-600 px-2 py-1 bg-[#E5ECF2] text-[14px]">Biweekly Package</button>
        <button  className="border border-gray-600 px-2 py-1 bg-[#E5ECF2] text-[14px]">Monthly Package</button>
        </div>
        </div>
        <div className="mt-9">
            <h2 className="text-[27px] font-semibold text-[#515151]">Tell us about your home</h2>
            <p className="text-[14px] text-gray-600 mt-3">Please indicate the entire home size. If you'd like to exclude certain rooms or areas, you can do so by clicking "Exclude rooms from my cleaning" below. This helps us ensure accurate pricing.

        </p>


            </div>
              
        <div className="mt-6 flex justify-between">
        <div>
        <label className="block text-gray-700 font-semibold mb-2">Bedroom</label>
        <select className="w-[200px] p-3 border border-gray-300 rounded-lg">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
           
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">Bathrooms</label>
        <select className="w-[240px] p-3 border border-gray-300 rounded-lg">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
           
          </select>
        </div>


        
        </div>
   
      <div className="flex justify-between mt-4">
       <div>
        <label className="block text-gray-700 font-semibold mb-2">Washrooms</label>
        <select className="w-[200px] p-3 border border-gray-300 rounded-lg">
            <option>1</option>
            <option>2</option>
          
           
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">Additional Rooms</label>
        <select className="w-[240px] p-3 border border-gray-300 rounded-lg">
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
           
           
          </select>
        </div>

       </div>

    <div className="flex justify-between mt-4">


    <div>
        <label className="block text-gray-700 font-semibold mb-2">Living Rooms</label>
        <select className="w-[200px] p-3 border border-gray-300 rounded-lg">
            <option>1</option>
            <option>2</option>
             </select>
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">Kitchens</label>
        <select className="w-[240px] p-3 border border-gray-300 rounded-lg">
            <option>1</option>
            <option>2</option>
          
           
          </select>
        </div>


    </div>


    <div className="flex justify-between mt-4">


<div>
    <label className="block text-gray-700 font-semibold mb-2">Basement</label>
    <select className="w-[200px] p-3 border border-gray-300 rounded-lg">
        <option>Exclude</option>
        <option>Half Basement</option>
        <option>Full Basement</option>
       </select>
    </div>

    <div>
      <label className="block text-gray-700 font-semibold mb-2">Cat/Dog Hair</label>
    <select className="w-[240px] p-3 border border-gray-300 rounded-lg">
        <option>None</option>
        <option>Some</option>
        <option>Alot</option>
      
       
      </select>
    </div>
</div>

<div className="flex items-center space-x-2">
      <input
        type="checkbox"
        id="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className="form-checkbox h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring focus:ring-offset-2 focus:ring-blue-500"
      />
      <p>Exclude rooms from my cleaning</p>
    </div>
   {isChecked && 
  <div className="mt-10">
    <div>
      <p className="font-semibold text-[14px] text-gray-500">Select What Does Not Need To Be Done</p>
    </div>
    <div className="flex gap-10 mt-4 ">
    <div
      className="h-[50px] w-[50px] bg-cover bg-center"
      style={{ backgroundImage: `url('bed.png')` }}
    >
      </div>
      <div
      className="h-[50px] w-[50px] bg-cover bg-center"
      style={{ backgroundImage: `url('bathroom.png')` }}
    >
      </div>
      <div
      className="h-[50px] w-[50px] bg-cover bg-center"
      style={{ backgroundImage: `url('room.png')` }}
    >
      </div>
      <div
      className="h-[50px] w-[50px] bg-cover bg-center"
      style={{ backgroundImage: `url('kitchen.png')` }}
    >
      </div>
    </div>
  </div>}
         

      
      </div>

      {/* Right Column - Popular Questions */}
      <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Popular Questions</h3>
        <ul className="space-y-4 text-gray-700">
          <li>➤ What do I choose for "Current State"?</li>
          <li>➤ What should I choose if it's my first clean?</li>
          <li>➤ What if I book wrong?</li>
          <li>➤ Do you have a phone number?</li>
          <li>➤ Can I later reschedule my booking online?</li>
          <li>➤ What is your cancellation policy?</li>
          <li>➤ Why do I have to enter my town/city?</li>
        </ul>
        
      </div>
    
    </div>
  );
};

export default BookOnline;
