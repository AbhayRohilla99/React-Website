import React from 'react';
import PackageCard from '../PackageCard/PackageCard';
import PackageFeature from '../PackageFeatures/PackageFeature';
import { useEffect } from 'react';

const Package = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover object-fill bg-center bg-no-repeat opacity-100" style={{ backgroundImage: "url('package.jpg')" }}>
      </div>

      {/* Header */}
      {/* <header className="absolute top-0 left-0 right-0 flex justify-between p-5 bg-white shadow">
        <div className="text-xl font-semibold">Shine Cleaning</div>
        <nav className="flex space-x-4">
          <a href="#packages" className="text-blue-600">Packages</a>
          <a href="#contact" className="text-blue-600">Contact</a>
        </nav>
      </header> */}

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 z-20">
        <h1 className="text-black text-5xl font-bold drop-shadow-lg">Packages</h1>
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white pointer-events-none"></div>
    </div>
    <PackageCard/>
    <PackageFeature/>
    
    </>

    
  );
}

export default Package;
