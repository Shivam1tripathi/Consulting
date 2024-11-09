import React, { useState } from "react";
import ProjectManagement from "../Components/ProjectManagement";
import ClientManagement from "../Components/ClientManagement";
import ContactFormDetails from "../Components/ContactFormDetails";
import SubscribedEmails from "../Components/SubscribedEmails";

const AdminPanel = () => {
  const [currentTab, setCurrentTab] = useState("projects"); // To handle tab navigation

  const renderTabContent = () => {
    switch (currentTab) {
      case "projects":
        return <ProjectManagement />;
      case "clients":
        return <ClientManagement />;
      case "contactForm":
        return <ContactFormDetails />;
      case "subscribedEmails":
        return <SubscribedEmails />;
      default:
        return <div>Select a tab</div>;
    }
  };

  return (
    <div className="flex">
      <div className="w-1/4 h-screen bg-gray-800 text-white p-6 space-y-6">
        <h2 className="text-xl font-semibold">Admin Panel</h2>
        <ul className="space-y-4">
          <li
            onClick={() => setCurrentTab("projects")}
            className="cursor-pointer hover:text-orange-500"
          >
            Project Management
          </li>
          <li
            onClick={() => setCurrentTab("clients")}
            className="cursor-pointer hover:text-orange-500"
          >
            Client Management
          </li>
          <li
            onClick={() => setCurrentTab("contactForm")}
            className="cursor-pointer hover:text-orange-500"
          >
            Contact Form Details
          </li>
          <li
            onClick={() => setCurrentTab("subscribedEmails")}
            className="cursor-pointer hover:text-orange-500"
          >
            Subscribed Emails
          </li>
        </ul>
      </div>

      <div className="w-3/4 p-6 bg-gray-50">{renderTabContent()}</div>
    </div>
  );
};

export default AdminPanel;
