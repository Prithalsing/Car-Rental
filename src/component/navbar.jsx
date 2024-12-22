import React from 'react';
import Sidebar from './sidebar';


const NavBar = () => {
  return (
    <>
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Sidebar />
            <div className="flex items-center">
              <img src="/logo.jpg" alt="Car Rental Logo" className="h-12 w-auto" />
              <h1 className="text-gray-600 text-lg">CarRental</h1>
            </div>
          </div>
          <div className="hidden lg:flex space-x-6">
            <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Cars</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">About</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Contact</a>
          </div>
        </div>
      </div>
    </nav>
    </>
   
  );
};

export default NavBar;
