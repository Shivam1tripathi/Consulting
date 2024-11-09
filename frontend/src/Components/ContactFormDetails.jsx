import axios from "axios";
import React, { useEffect, useState } from "react";

const ContactFormDetails = () => {
  const [contactData, setContactData] = useState([]);

  const viewContactData = async () => {
    // Simulating fetching contact form data
    try {
      const data = await axios.get(
        " http://localhost:8080/api/v1/contact/all-Contact"
      );
      setContactData(data.data.Contact);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div id="contact">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Contact Form Details
      </h2>
      <button
        onClick={viewContactData}
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        View Contact Data
      </button>

      <div className="mt-6 space-y-4">
        {contactData.map((contact, index) => (
          <div key={index} className="border p-6 rounded-lg shadow-lg">
            <p className="font-semibold">Name: {contact.name}</p>
            <p>Email: {contact.email}</p>
            <p>Phone: {contact.phone}</p>
            <p>City: {contact.city}</p>
          </div>
        ))}
        {contactData.length === 0 && <h1>No contact found</h1>}
      </div>
    </div>
  );
};

export default ContactFormDetails;
