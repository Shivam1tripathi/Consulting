import React from "react";

const AboutUs = () => {
  return (
    <div className="flex justify-center items-end  h-4/6">
      <div className="text-center bg-white p-10 w-3/5">
        <h2 className="text-2xl font-bold text-blue-600 mb-2">About Us</h2>
        <div className="w-16 h-1 bg-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600 mb-6">
          Fifteen years of expertise in real estate, excellent customer service
          and a commitment to work hard, listen and follow through. We provide
          quality services to build relationships with clients and, more
          importantly, maintain those relationships by communicating
          effectively.
        </p>
        <button className="text-blue-600 border border-blue-600 px-4 py-2 rounded hover:bg-blue-600 hover:text-white transition duration-300">
          LEARN MORE
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
