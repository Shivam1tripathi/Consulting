import React from "react";
import image from "../Assets/Images/logo.svg";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-3 px-24 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center ">
        <img src={image} alt="Real Trust Logo" className="h-8  mr-2" />
      </div>

      {/* Nav Links */}
      <div className="flex items-center space-x-8 ">
        <a href="/" className="text-gray-600 hover:text-blue-900 font-bold">
          Home
        </a>
        <a
          href="#services"
          className="text-gray-600 hover:text-blue-900 font-bold"
        >
          Services
        </a>
        <a
          href="#Projects"
          className="text-gray-600 hover:text-blue-900 font-bold"
        >
          About Projects
        </a>
        <a
          href="#reviews"
          className="text-gray-600 hover:text-blue-900 font-bold"
        >
          Testimonials
        </a>
        <a
          href="#contact"
          className="bg-orange-500 text-white font-medium px-8 py-2 rounded-md hover:bg-orange-600"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
