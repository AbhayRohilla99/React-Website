import React from "react";
import Navbar from "../Navbar/Navbar";
import { useEffect } from "react";
const ServiceArea = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
    <Navbar heading={"Services"}/>
    <div className="flex flex-col md:flex-row items-center justify-center p-8 bg-gray-50 min-h-screen">
      {/* Text Section */}
      <div className="md:w-1/2 text-center md:text-left">
        <p className="text-lg text-gray-700">
          We started out supplying home cleaning services in NDG and surrounding suburbs.
          Our loyal and happy customers have spread the word and we now provide
          home cleaning all over Montreal.
        </p>
      </div>

      {/* Map Section */}
      <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8">
        <iframe
          title="Montreal Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.893646942587!2d-73.56725628444142!3d45.50168897910165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91a35322d6f09%3A0x1c52909e5f4e8928!2sMontreal%2C%20QC%2C%20Canada!5e0!3m2!1sen!2sus!4v1697284323537!5m2!1sen!2sus"
          width="100%"
          height="300"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg shadow-lg"
        ></iframe>
      </div>
    </div>
    </>
  );
};

export default ServiceArea;
