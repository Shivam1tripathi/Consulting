import React from "react";

const HappyClientCard = (props) => {
  return (
    <div className="w-64 mx-auto bg-white shadow-lg rounded-lg cursor-pointer p-6 transition-transform transform hover:scale-105 hover:shadow-2xl">
      <div className="flex justify-center">
        <img
          src={`http://localhost:8080/api/v1/Client/clients-photo/${props.id}`}
          alt="Profile"
          className="w-20 h-20 rounded-full object-cover"
        />
      </div>
      <div className="text-center mt-4">
        <p className="text-gray-600 text-sm">{props.description}</p>
        <p className="text-blue-600 font-semibold mt-4">{props.name}</p>
        <p className="text-gray-500 text-sm">{props.Designation}</p>
      </div>
    </div>
  );
};

export default HappyClientCard;
