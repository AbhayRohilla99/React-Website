import React from 'react';
import { useEffect } from 'react';

const SignUp = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50 mt-20">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800">Create An Account For Free!</h2>
        <p className="text-center text-gray-600 mt-2">
          Get a free account in 30 seconds. No credit card required.
        </p>
        <form className="mt-8 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">First Name</label>
            <input
              type="text"
              placeholder="First Name"
              className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Last Name</label>
            
            <input
              type="text"
              placeholder="Last Name"
              className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Ex: example@xyz.com"
              className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 mt-4 text-white bg-blue-400 rounded-md hover:bg-blue-500 focus:outline-none"
          >
            Sign Up
          </button>
        </form>
        <div className="flex justify-center mt-6">
          <p className="text-sm text-gray-600">
            Already have an account? <a href="#" className="text-blue-400 hover:underline">Log In</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
