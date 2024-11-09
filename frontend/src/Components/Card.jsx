import React from "react";

const Card = (props) => {
  return (
    <div className="w-72 m-4 bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transition-transform transform hover:scale-105 cursor-pointer hover:shadow-xl">
      <img
        className="w-full h-48 object-cover"
        src={`http://localhost:8080/api/v1/project/Project-photo/${props.id}`} // Replace with your image URL
        alt={props.name}
      />
      <div className="p-4">
        <h3 className="text-blue-600 font-semibold text-lg mb-1">
          {props.name.length > 27
            ? props.name.substring(0, 27) + "..."
            : props.name}
        </h3>

        <p className="text-gray-600 text-sm mb-4">
          {props.description.length > 80
            ? props.description.substring(0, 75) + "..."
            : props.description}
        </p>
        <button className="w-3/4 py-2  bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition duration-300">
          READ MORE
        </button>
      </div>
    </div>
  );
};

export default Card;
