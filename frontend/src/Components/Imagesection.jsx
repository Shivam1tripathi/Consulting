import React from "react";
import Image1 from "../Assets/Images/pexels-brett-sayles-2881232.svg"; // Replace with the path to your images
import Image2 from "../Assets/Images/pexels-andres-ayrton-6578391.svg";
import Image3 from "../Assets/Images/pexels-fauxels-3182834.svg";
import BlueSemiCircle from "../Assets/Shapes/Ellipse 22.svg"; // Replace with the path to your shapes
import BlueCircle from "../Assets/Shapes/Ellipse 24.svg"; // Replace with the path to your shapes
import OrangeSquare from "../Assets/Shapes/Subtract-4.svg";
import BlueSquare from "../Assets/Shapes/Ellipse 21.svg";
import OrangeCorner from "../Assets/Shapes/Subtract-4.svg";
import BlueCorner from "../Assets/Shapes/Subtract-4.svg";

const Imagesection = () => {
  return (
    <div className="relative bg-white py-16 flex justify-center">
      {/* Background Shapes */}
      <img
        src={BlueSemiCircle}
        alt="Blue  Semi-Circle"
        className="absolute  top-60 left-0 w-56 "
      />
      <img
        src={BlueSemiCircle}
        alt="Blue Semi-Circle"
        className="absolute rotate-180 top-60 right-0 w-56 "
      />
      <img
        src={BlueSquare}
        alt="Orange Square"
        className="absolute  top-16 left-32 w-16 "
      />
      <img
        src={BlueSquare}
        alt=" blue circle"
        className="absolute top-32 right-12 w-40 "
      />
      <img
        src={BlueSquare}
        alt="Blue Square"
        className="absolute  top-72 left-20 w-40  transform -translate-y-1/2"
      />
      {/* first image right blue box */}
      <div
        className="absolute top-16 bg-blue-600  w-8 h-8"
        style={{ left: "78vh" }}
      ></div>

      {/* second image background blue box */}
      <div
        className="absolute top-72 bg-blue-200 w-40 h-40 opacity-50"
        style={{ left: "70vh" }}
      ></div>

      <div
        className="absolute top-80 bg-blue-200 opacity-50 w-12 h-12"
        style={{ left: "50vh" }}
      ></div>
      <img
        src={BlueCorner}
        alt="Blue Corner"
        className="absolute bottom-10 right-1/3 w-8 h-8"
      />

      {/* Image Gallery */}
      <div className="relative flex gap-4">
        <div className="relative">
          <img src={Image1} alt="Gallery Image 1" className="w-44 shadow-md" />
          <img
            src={OrangeCorner}
            alt="Orange Corner"
            className="absolute top-36 right-36 w-12 opacity-75"
          />
        </div>
        <div className="relative top-16 z-10">
          <img src={Image2} alt="Gallery Image 2" className="w-80  shadow-lg" />
          <img
            src={BlueSquare}
            alt="Blue Corner"
            className="absolute left-0 w-52 h-52"
          />
        </div>
        <div className="relative top-48">
          <img src={Image3} alt="Gallery Image 3" className="w-56 h-56 " />
          <img
            src={OrangeCorner}
            alt="Orange Corner"
            className="absolute top-48 -rotate-90 -right-2 w-5 h-5"
          />
        </div>
      </div>
    </div>
  );
};

export default Imagesection;
