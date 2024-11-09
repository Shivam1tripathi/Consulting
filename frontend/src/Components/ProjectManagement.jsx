import axios from "axios";
import React, { useState } from "react";

const ProjectManagement = () => {
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectImage, setProjectImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const Project = new FormData();
    Project.append("name", projectName);
    Project.append("description", projectDescription);
    Project.append("photo", projectImage);
    const data = axios.post(
      " http://localhost:8080/api/v1/project/registerProject",
      Project
    );

    setProjectName("");
    setProjectImage(null);
    setProjectDescription("");
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Project Management
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700 font-medium">
            Project Name
          </label>
          <input
            type="text"
            placeholder="Enter project name"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">
            Project Description
          </label>
          <textarea
            placeholder="Enter project description"
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          ></textarea>
        </div>

        <div>
          <label className="block text-gray-700 font-medium">
            Project Image
          </label>
          <input
            type="file"
            onChange={(e) => setProjectImage(e.target.files[0])}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-3 rounded-md font-medium hover:bg-orange-600 transition"
        >
          Add Project
        </button>
      </form>
    </div>
  );
};

export default ProjectManagement;
