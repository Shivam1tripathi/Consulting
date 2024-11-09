import axios from "axios";
import React, { useState } from "react";

const ConsultationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    // Only allow numbers and limit length to 10 digits
    if (/^\d*$/.test(value) && value.length <= 10) {
      setPhone(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const data = axios.post(
        " http://localhost:8080/api/v1/contact/registerContact",
        { name, email, phone, city }
      );

      setName("");
      setEmail("");
      setPhone("");
      setCity("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-blue-800 p-8 rounded-md shadow-lg">
      <h2 className="text-white text-center text-2xl font-semibold mb-6">
        Get a Free Consultation
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />

        <input
          type="email"
          placeholder="Enter Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />

        <input
          type="text"
          placeholder="Mobile Number"
          value={phone}
          onChange={handlePhoneChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />

        <input
          type="text"
          placeholder="Area, City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />

        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-3 rounded-md font-medium hover:bg-orange-600"
        >
          Get Quick Quote
        </button>
      </form>
    </div>
  );
};

export default ConsultationForm;
