import React from "react";
import ConsultationForm from "./ConsultationForm"; // Import the form component
import backgroundImage from "../Assets/Images/young-couple-examining-blueprints-with-real-estate-agent-while-buying-new-home 1.svg";

const ConsultationSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-cover bg-center p-8">
      <img
        src={backgroundImage}
        alt="Background"
        className="absolute -z-10 top-16 left-0  object-cover"
      />
      {/* Left Side with Text */}
      <div className="flex-1 flex text-white justify-start items-center md:mr-8">
        <h1 className="text-4xl md:text-7xl ml-20 font-bold leading-tight">
          Consultation, <br /> Design,
          <br /> & Marketing
        </h1>
      </div>

      {/* Right Side with Form */}
      <div className="flex-1  p-8 rounded-md  max-w-md w-full">
        <ConsultationForm />
      </div>
    </div>
  );
};

export default ConsultationSection;
