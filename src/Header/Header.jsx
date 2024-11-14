import React from 'react';

const CleaningServiceSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-4 lg:px-20 py-10">
      {/* Left section - Text */}
      <div className="lg:w-1/2">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4 mt-20">Experience the best house cleaning service</h1>
        <div className="h-1 w-20 bg-blue-300 mb-4"></div>
        <p className="text-lg text-gray-700 mb-6">
          Shine doesn’t just vacuum and dust homes — 
          <strong> we clean, restore, and maintain them throughout the year.</strong>
          Each package includes complimentary extras to ensure your home is spotless all year round. 
          Get in touch with us today to ask any questions or book your cleaning.
        </p>
        <p className="font-semibold">
          <span className="text-yellow-500">EXCELLENT</span> 
          <span className="text-yellow-500"> ★★★★★</span> 71 reviews 
          <span className="text-blue-600"> Google</span>
        </p>
      </div>

      {/* Right section - Image */}
      <div className="lg:w-[470px] mt-10 lg:mt-[80px] lg:ml-12">
  <img 
    src="img1.jpg" 
    alt="House cleaning service" 
    className="rounded-lg shadow-lg"
  />
</div>

    </div>
  );
};

export default CleaningServiceSection;
