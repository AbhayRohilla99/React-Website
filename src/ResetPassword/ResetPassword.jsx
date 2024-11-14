import React from 'react';
import { NavLink } from 'react-router-dom';

const ResetPassword = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200 mt-16" style={{ backgroundImage: 'url(your-image-url)', backgroundSize: 'cover' }}>
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800">Reset Password</h2>
        <p className="text-center text-gray-500 mt-2">
          Enter your email address below and we’ll email you a reset link.
        </p>
        <div className="flex justify-center mt-6">
          <div className="bg-gray-200 p-4 rounded-full">
            <svg className="w-12 h-12 text-gray-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
          </div>
        </div>
        <form className="mt-8 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              placeholder="Email/User ID"
              className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Reset Password Now
          </button>
        </form>
        <div className="flex justify-center mt-6">
          <NavLink to="/Login" className="text-sm text-blue-500 hover:underline">Back To Sign In</NavLink>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
