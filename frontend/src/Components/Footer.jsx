import React, { useState } from "react";
import Twitter from "../Assets/Icons/Group-1.svg";
import Instagram from "../Assets/Icons/Group.svg";
import Linkedin from "../Assets/Icons/Linkedin.svg";
import Facebook from "../Assets/Icons/Frame.svg";
import logo from "../Assets/Images/logo.svg";
import axios from "axios";

const Footer = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post(
        " http://localhost:8080/api/v1/subscription/registerSubscription",
        { email }
      );
      console.log(data);
      setEmail("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <footer className="bg-blue-500">
      {/* Top Section */}
      <div className="p-4 py-8 flex justify-between items-center">
        {/* Navigation Links */}
        <div className="flex space-x-6 text-white font-medium">
          <a href="/" className="hover:text-gray-300">
            Home
          </a>
          <a href="services" className="hover:text-gray-300">
            Services
          </a>
          <a href="Projects" className="hover:text-gray-300">
            Projects
          </a>
          <a href="#" className="hover:text-gray-300">
            Testimonials
          </a>
          <a href="Contact" className="hover:text-gray-300">
            Contact
          </a>
        </div>

        {/* Email Input and Subscribe Button */}
        <div className="flex items-center">
          <span className="text-white font-medium mr-6">Subscribe Us</span>
          <input
            type="email"
            placeholder="Enter Email Address"
            className="px-4 py-2 rounded-l-md border-none focus:outline-none"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <button
            onClick={handleSubmit}
            className="bg-white text-blue-500 font-medium px-4 py-2 rounded-r-md border-l-2 border-white hover:bg-gray-100"
          >
            Subscribe
          </button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-900 py-6 flex justify-between items-center text-gray-400 text-sm">
        {/* Copyright Text */}
        <div className="ml-4">&copy; All Rights Reserved 2023</div>

        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Real Trust Logo" className="h-6  mr-2" />
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mr-4">
          <a href="#" className="hover:opacity-80 bg-white p-1 rounded-2xl">
            <img src={Twitter} alt="Twitter" className="w-5 h-5" />
          </a>
          <a href="#" className="hover:opacity-80  bg-white p-1 rounded-2xl">
            <img src={Facebook} alt="Facebook" className="w-5 h-5" />
          </a>
          <a href="#" className="hover:opacity-80  bg-white p-1 rounded-2xl">
            <img src={Instagram} alt="Instagram" className="w-5 h-5" />
          </a>
          <a href="#" className="hover:opacity-80  bg-white p-1 rounded-2xl">
            <img src={Linkedin} alt="LinkedIn" className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
