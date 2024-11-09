import axios from "axios";
import React, { useState } from "react";

const ClientManagement = () => {
  const [clientName, setClientName] = useState("");
  const [clientDescription, setClientDescription] = useState("");
  const [clientDesignation, setClientDesignation] = useState("");
  const [clientImage, setClientImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const Project = new FormData();
    Project.append("name", clientName);
    Project.append("description", clientDescription);
    Project.append("Designation", clientDesignation);
    Project.append("photo", clientImage);
    const data = axios.post(
      " http://localhost:8080/api/v1/client/registerclient",
      Project
    );

    setClientName("");
    setClientImage(null);
    setClientDescription("");
    setClientDesignation("");
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Client Management
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700 font-medium">Client Name</label>
          <input
            type="text"
            placeholder="Enter client name"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">
            Client Description
          </label>
          <textarea
            placeholder="Enter client description"
            value={clientDescription}
            onChange={(e) => setClientDescription(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          ></textarea>
        </div>

        <div>
          <label className="block text-gray-700 font-medium">
            Client Designation
          </label>
          <input
            type="text"
            placeholder="Enter client designation"
            value={clientDesignation}
            onChange={(e) => setClientDesignation(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">
            Client Image
          </label>
          <input
            type="file"
            onChange={(e) => setClientImage(e.target.files[0])}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-3 rounded-md font-medium hover:bg-orange-600 transition"
        >
          Add Client
        </button>
      </form>
    </div>
  );
};

export default ClientManagement;
