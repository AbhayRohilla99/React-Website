import React  from "react";
import { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
    return(
      
        <>
       
       <Navbar heading={"Contact"}/>
      <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="w-full max-w-lg p-8">
        <h1 className="text-2xl font-bold text-center mb-6">We'll Be In Touch Within 24 Hours</h1>
        
        <form className="space-y-4">
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block text-xs font-semibold mb-1" htmlFor="firstName">FIRST NAME <span className="text-red-500">(REQUIRED)</span></label>
              <input
                type="text"
                id="firstName"
                placeholder="First Name*"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-xs font-semibold mb-1" htmlFor="lastName">LAST NAME</label>
              <input
                type="text"
                id="lastName"
                placeholder="Last Name"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold mb-1" htmlFor="email">EMAIL</label>
            <input
              type="email"
              id="email"
              placeholder="Email*"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold mb-1" htmlFor="phone">PHONE</label>
            <input
              type="tel"
              id="phone"
              placeholder="Phone Number*"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold mb-1" htmlFor="subject">SUBJECT</label>
            <input
              type="text"
              id="subject"
              placeholder="Subject"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold mb-1" htmlFor="message">MESSAGE</label>
            <textarea
              id="message"
              placeholder="Message"
              className="w-full p-2 border border-gray-300 rounded"
              rows="4"
            ></textarea>
          </div>

          {/* Placeholder for reCAPTCHA */}
          <div className="flex items-center justify-between mt-4">
            
            <div className="border p-2 rounded-md">
              <span>I'm not a robot</span>
              <div className="text-xs text-gray-500">reCAPTCHA Privacy · Terms</div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full p-3 mt-4 text-white bg-blue-300 hover:bg-blue-400 font-semibold rounded"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>




        </>
    )
}
export default Contact;