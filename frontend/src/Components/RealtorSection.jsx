import React from "react";
import mainImage from "../Assets/Images/Ellipse 11.svg"; // Replace with your main image path
import image1 from "../Assets/Images/Ellipse 12.svg"; // Replace with your secondary image path
import image2 from "../Assets/Images/Ellipse 13.svg"; // Replace with your secondary image path
import bgline from "../Assets/Shapes/Ellipse 7.svg"; // Replace with your secondary image path
import bluecircle from "../Assets/Shapes/Ellipse 24.svg"; // Replace with your secondary image path
import redcircle from "../Assets/Shapes/Ellipse 25.svg"; // Replace with your secondary image path

const RealtorSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between py-20 p-8 ">
      <img
        src={bgline}
        alt="background Image"
        className=" -z-20 -rotate-12 absolute border-white"
        style={{ top: "90vh", right: "32vh", height: "90vh" }}
      />
      <img
        src={bluecircle}
        alt="bluecircle Image"
        className=" z-20 w-12  absolute border-white"
        style={{ top: "105vh", right: "93vh" }}
      />
      <img
        src={redcircle}
        alt="redcircle Image"
        className=" z-20 w-8 absolute  border-white"
        style={{ top: "160vh", right: "90vh" }}
      />
      <img
        src={bluecircle}
        alt="bluecircle Image"
        className=" z-20 w-4  absolute border-white"
        style={{ top: "167vh", right: "30vh" }}
      />
      {/* Left Side Text */}
      <div className="md:w-2/5 ml-20 text-center md:text-left ">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">
          Not Your Average Realtor
        </h2>
        <p className="text-gray-700">
          Meet a realtor who brings a unique approach by blending expertise in
          real estate with design, improving your buying or selling experience
          and making sure you get the best value.
        </p>
      </div>

      {/* Right Side Images */}
      <div className="md:w-4/5 flex justify-center items-center space-x-4 mt-8 md:mt-0">
        {/* Main Circle Image */}
        <div className="relative">
          <img
            src={mainImage}
            alt="Main Realtor"
            className="rounded-full w-64 object-cover shadow-lg"
          />
          {/* Secondary Images */}
          <div className="absolute -top-16 -right-32">
            <img
              src={image1}
              alt="Secondary Image 1"
              className="rounded-full w-36 object-cover shadow-md border-4 border-white"
            />
          </div>
          <div className="absolute -bottom-8 -right-28">
            <img
              src={image2}
              alt="Secondary Image 2"
              className="rounded-full w-32 object-cover shadow-md border-4 border-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealtorSection;
