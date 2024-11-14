import React from 'react';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
const Login = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="flex items-center justify-center min-h-screen mt-16">
      <div className="w-full max-w-md p-8 space-y-8 bg-white shadow-md rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800">Sign In</h2>
        <p className="text-center text-gray-600">
          Sign in to track your bookings, reschedule, edit and more.
        </p>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Sign In Through Your Email</label>
            <input
              type="email"
              placeholder="Ex: example@xyz.com"
              className="w-full p-3 mt-1 border border-red-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 mt-4 border border-red-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
           
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-400 rounded-md hover:bg-blue-500 focus:outline-none"
          >
            Sign In
          </button>
        </form>
        <div className="flex justify-between mt-6">
          <NavLink to="/ResetPassword" className="text-sm text-gray-600 hover:text-blue-500">Forgot Password?</NavLink>
          <NavLink to="/SignUp" className="text-sm text-gray-600 hover:text-blue-500">Sign Up</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;
