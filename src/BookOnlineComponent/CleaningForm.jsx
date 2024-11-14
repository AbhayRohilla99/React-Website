import React, { useState } from 'react';

function CleaningBookingForm() {
  const [formData, setFormData] = useState({
    bedrooms: 1,
    bathrooms: 1,
    washrooms: 0,
    additionalRooms: 0,
    livingRooms: 1,
    kitchens: 1,
    basement: 'Exclude',
    petHair: 'None',
    packageType: 'One-time',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-wrap justify-between gap-10 px-4 py-8 bg-gray-100">
      {/* Left Section - Form */}
      <div className="w-full md:w-2/3">
        <h2 className="text-2xl font-bold mb-4">Select a Package</h2>
        <div className="flex gap-4 mb-6">
          {['One-time', 'Weekly package', 'Biweekly package', 'Monthly package'].map((packageType) => (
            <button
              key={packageType}
              onClick={() => setFormData({ ...formData, packageType })}
              className={`px-4 py-2 border rounded ${
                formData.packageType === packageType
                  ? 'bg-blue-200 border-blue-500'
                  : 'bg-gray-200'
              }`}
            >
              {packageType}
            </button>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-4">Tell us about your home</h2>
        <p className="mb-4 text-gray-600">
          Please indicate the entire home size. You can exclude rooms by checking below.
        </p>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Form Fields */}
          {[
            { label: 'Bedrooms', name: 'bedrooms', options: [1, 2, 3, 4] },
            { label: 'Bathrooms', name: 'bathrooms', options: [1, 2, 3, 4] },
            { label: 'Washrooms', name: 'washrooms', options: [0, 1, 2, 3] },
            { label: 'Additional Rooms', name: 'additionalRooms', options: [0, 1, 2, 3] },
            { label: 'Living Rooms', name: 'livingRooms', options: [1, 2, 3] },
            { label: 'Kitchens', name: 'kitchens', options: [1, 2] },
            { label: 'Basement', name: 'basement', options: ['Exclude', 'Include'] },
            { label: 'Cat/Dog Hair', name: 'petHair', options: ['None', 'Light', 'Heavy'] },
          ].map((field) => (
            <div key={field.name}>
              <label className="block text-sm font-medium mb-2">{field.label}</label>
              <select
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              >
                {field.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          ))}
          <div className="col-span-2">
            <label className="block text-sm font-medium mb-2">
              <input type="checkbox" className="mr-2" /> Exclude rooms from my cleaning
            </label>
          </div>
        </form>
      </div>

      {/* Right Section - Booking Summary */}
      <div className="w-full md:w-1/3">
        <div className="bg-blue-100 p-4 rounded shadow mb-4">
          <h3 className="text-lg font-semibold">Live Reviews</h3>
          <p className="text-sm mt-2">
            "Absolutely fantastic. Jody & Jennifer did amazing job! The service is great..."{' '}
            <span className="text-blue-500">Read More</span>
          </p>
          <p className="mt-2">- Deborah C</p>
          <p className="mt-1 text-yellow-500">★★★★★</p>
        </div>

        <div className="bg-gray-50 p-4 border rounded shadow">
          <h3 className="text-lg font-semibold mb-4">Booking Summary</h3>
          <ul className="text-sm">
            {Object.entries(formData).map(([key, value]) => (
              <li key={key} className="flex justify-between">
                <span>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                <span>{value}</span>
              </li>
            ))}
          </ul>
          <div className="border-t mt-4 pt-4">
            <p className="flex justify-between">
              <span>Sub-Total</span>
              <span>$119.00</span>
            </p>
            <p className="flex justify-between font-bold">
              <span>Total</span>
              <span>$136.85</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CleaningBookingForm;
