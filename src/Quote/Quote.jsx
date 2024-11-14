import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { useEffect } from 'react';

const QuoteForm = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    serviceType: '',
    frequency: '',
    bedrooms: '',
    fullBathrooms: '',
    halfBathrooms: '',
    basement: '',
    additionalNotes: '',
    consent: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "This field is required.";
    if (!formData.email) newErrors.email = "This field is required.";
    if (!formData.phoneNumber) newErrors.phoneNumber = "This field is required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Submit form logic here (e.g., API call)
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div className="bg-white py-10 px-4 md:px-16 lg:px-32 mt-16">
      <h1 className="text-4xl font-bold text-center mb-4">Get a Quote!</h1>
      <p className="text-center text-gray-600 mb-10">
        Our friendly staff are waiting to serve you. Submit a service inquiry below, or Call us at <span className="text-blue-600">(438) 806-0628</span>
      </p>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-start space-y-8 md:space-y-0 md:space-x-8">
        
        {/* Left Form Section */}
        <form onSubmit={handleSubmit} className="bg-gray-50 shadow-md rounded-lg p-6 md:w-2/3 lg:w-1/2">
          <h2 className="text-xl font-semibold mb-4">Get a Quick & Accurate Quote</h2>
          
          {/* Service Type Section */}
          <div className="mb-4">
            <h3 className="text-sm font-semibold mb-2">Service Type</h3>
            <div className="flex flex-wrap space-x-4">
              {['Regular Cleaning', 'Deep Cleaning', 'Move In/Out Cleaning', 'Post-Construction'].map((type) => (
                <label key={type} className="flex items-center space-x-2">
                  <input type="radio" name="serviceType" value={type} onChange={handleChange} className="form-radio" />
                  <span>{type}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Frequency Section */}
          <div className="mb-4">
            <h3 className="text-sm font-semibold mb-2">Frequency</h3>
            <div className="flex space-x-4">
              {['One-time', 'Weekly', 'Bi-weekly', 'Monthly'].map((freq) => (
                <label key={freq} className="flex items-center space-x-2">
                  <input type="radio" name="frequency" value={freq} onChange={handleChange} className="form-radio" />
                  <span>{freq}</span>
                </label>
              ))}
            </div>
          </div>
          
          {/* Bedrooms Section */}
          <div className="mb-4">
            <h3 className="text-sm font-semibold mb-2">Bedrooms</h3>
            <div className="flex space-x-4">
              {[1, 2, 3, 4, 5].map((number) => (
                <label key={number} className="flex items-center space-x-2">
                  <input type="radio" name="bedrooms" value={number} onChange={handleChange} className="form-radio" />
                  <span>{number}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Full Bathrooms Section */}
          <div className="mb-4">
            <h3 className="text-sm font-semibold mb-2">Full Bathrooms</h3>
            <div className="flex space-x-4">
              {[1, 2, 3, 4, 5].map((number) => (
                <label key={number} className="flex items-center space-x-2">
                  <input type="radio" name="fullBathrooms" value={number} onChange={handleChange} className="form-radio" />
                  <span>{number}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Half Bathrooms Section */}
          <div className="mb-4">
            <h3 className="text-sm font-semibold mb-2">Half Bathrooms (sink & toilet)</h3>
            <div className="flex space-x-4">
              {[0, 1, 2, 3, 4].map((number) => (
                <label key={number} className="flex items-center space-x-2">
                  <input type="radio" name="halfBathrooms" value={number} onChange={handleChange} className="form-radio" />
                  <span>{number}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Basement Section */}
          <div className="mb-4">
            <h3 className="text-sm font-semibold mb-2">Basement</h3>
            <div className="flex space-x-4">
              <label className="flex items-center space-x-2">
                <input type="radio" name="basement" value="Included" onChange={handleChange} className="form-radio" />
                <span>Included</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="basement" value="Excluded" onChange={handleChange} className="form-radio" />
                <span>Excluded</span>
              </label>
            </div>
          </div>

          {/* Additional Fields */}
          <div className="mb-4">
            <h3 className="text-sm font-semibold mb-2">Full Name</h3>
            <input
              type="text"
              name="fullName"
              placeholder="Kathy Smith"
              value={formData.fullName}
              onChange={handleChange}
              className={`border w-full p-2 rounded-md ${errors.fullName ? 'border-red-500' : ''}`}
            />
            {errors.fullName && <p className="text-red-500 text-xs">{errors.fullName}</p>}
          </div>

          <div className="mb-4">
            <h3 className="text-sm font-semibold mb-2">Email</h3>
            <input
              type="email"
              name="email"
              placeholder="joe@example.com"
              value={formData.email}
              onChange={handleChange}
              className={`border w-full p-2 rounded-md ${errors.email ? 'border-red-500' : ''}`}
            />
            {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
          </div>

          <div className="mb-4">
            <h3 className="text-sm font-semibold mb-2">Phone Number</h3>
            <input
              type="text"
              name="phoneNumber"
              placeholder="(123) 456-7890"
              value={formData.phoneNumber}
              onChange={handleChange}
              className={`border w-full p-2 rounded-md ${errors.phoneNumber ? 'border-red-500' : ''}`}
            />
            {errors.phoneNumber && <p className="text-red-500 text-xs">{errors.phoneNumber}</p>}
          </div>

          <div className="mb-4">
            <h3 className="text-sm font-semibold mb-2">Additional Notes?</h3>
            <textarea
              name="additionalNotes"
              placeholder="Optional"
              value={formData.additionalNotes}
              onChange={handleChange}
              className="border w-full p-2 rounded-md"
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="flex items-start space-x-2">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="mt-1"
              />
              <span className="text-xs">
                By providing your phone number above, and pressing the "Get a Quote" button below, you agree to receive automated text messages from Shine and also agree to our privacy policy and terms of service. Consent is not a condition of purchase. Message frequency may vary. Reply HELP for help or STOP to cancel.
              </span>
            </label>
          </div>

          <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500">
            Get a Quote
          </button>
        </form>

        {/* Right Section for Reviews and Questions */}
        <div className="md:w-1/3 lg:w-1/2 bg-gray-50 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Live Reviews</h2>
          <div className="space-y-4">
            <div className="bg-blue-100 p-4 rounded-md">
              <p className="text-gray-700">Roxanne is great. Friendly and does a great job.</p>
              <div className="flex items-center">
                <span className="mr-2 font-semibold">Nancy C</span>
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-gray-400" />
              </div>
            </div>
            {/* Additional reviews can go here */}
          </div>

          <h2 className="text-xl font-semibold mt-6 mb-4">Popular Questions</h2>
          <div>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <span>&#8250;</span>
                <a href="#response" className="text-blue-600 hover:underline">How long until I receive a response?</a>
              </li>
              <li className="flex items-center space-x-2">
                <span>&#8250;</span>
                <a href="#pricing" className="text-blue-600 hover:underline">Where can I find pricing?</a>
              </li>
              <li className="flex items-center space-x-2">
                <span>&#8250;</span>
                <a href="#availability" className="text-blue-600 hover:underline">Where can I find availability?</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteForm;
