import axios from "axios";
import React, { useState } from "react";

const SubscribedEmails = () => {
  const [subscribedEmails, setSubscribedEmails] = useState([]);

  const fetchSubscribedEmails = async () => {
    try {
      const data = await axios.get(
        " http://localhost:8080/api/v1/subscription/all-Subscription"
      );
      setSubscribedEmails(data.data.Subscription);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Subscribed Email Addresses
      </h2>
      <button
        onClick={fetchSubscribedEmails}
        className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
      >
        View Subscribed Emails
      </button>

      <div className="mt-6 space-y-2">
        {subscribedEmails?.map((e) => (
          <p className="text-gray-700">{e.email}</p>
        ))}
      </div>
    </div>
  );
};

export default SubscribedEmails;
