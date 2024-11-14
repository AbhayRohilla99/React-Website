
import React from "react";
  const Guaranteed = () => {
    return(
<div className="flex flex-col bg-[#FFFFFF] md:flex-row items-start p-10  text-gray-800 space-y-8 md:space-y-0 md:space-x-12 max-w-[1150px] mx-auto mt-10">
                {/* Left Text Section */}
                <div className="md:w-[1500px] space-y-6 mt-4">
                    <h1 className="text-[40px] font-extrabold tracking-wide text-[#000000] pb-1">
                    Guaranteed Quality
                     </h1>

                    <div className="space-y-5 text-[22px] text-[#676C71]">
                    We guarantee the quality of our cleaning so you dont have to worry about paying for a service that doesn’t meet your expectations.
                    </div>
               </div>
             <div className="md:w-[400px] flex justify-center relative">
        </div>
        <img 
        src="deep.png"
        className="rounded-lg shadow-lg w-full h-[400px] ml-14 mt-10"
        />
         </div>
    )
  }
  export default Guaranteed;