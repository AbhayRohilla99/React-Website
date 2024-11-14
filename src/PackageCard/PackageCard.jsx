import React from 'react';

const PackageCard = () => {
  const packages = [
    {
      title: "Regular Clean",
      price: "$119",
      description: "Starting price for 1 bedroom apartments up to 20% off for recurring plans",
      img: "package1.jpg",
      color: "bg-[#E8F9FF]"
    },
    {
      title: "Move In/Out Clean",
      price: "$219",
      description: "Starting price for 1 bedroom apartments Ideal for a one-time in depth cleaning",
      img: "package2.jpeg",
      color: "bg-[#FFFFEB]"
    },
    {
      title: "Deep Clean",
      price: "$239",
      description: "Starting price for 1 bedroom apartments Ideal for a one-time in depth cleaning",
      img: "package2.jpeg",
      color: "bg-[#F7EBF7]"
    }
  ];

  return (
    <div className="flex justify-center  items-center gap-6 py-2 mt-6">
      {packages.map((pack, index) => (
        <div key={index} className={`rounded-lg relative  shadow-lg p-6 w-80 ${pack.color}`}>
          <img src={pack.img} alt={pack.title} className="w-full h-40 object-cover rounded-t-lg" />
          <div className="p-4 flex flex-col justify-center items-center">
            <h3 className="text-xl font-semibold mt-4">{pack.title}</h3>
            <p className="text-black text-[14px] font-semibold">Starting at</p>
            <div>
              <p className="font-bold absolute top-[165px] right-[30px] text-4xl border border-black bg-black text-white">{pack.price}</p>
            </div>
            <p className="mt-4 text-[12px] font-bold ml-2">{pack.description}</p>
           
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Contact Us</button>
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default PackageCard;
