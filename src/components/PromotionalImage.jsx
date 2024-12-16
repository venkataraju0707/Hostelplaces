import React, { useState } from "react";

function TravelPromo() {
  const [formData, setFormData] = useState({
    destination: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6 py-10">
       
      <h1 className="text-4xl font-bold text-center mb-4">Meet your people.</h1>
      <p className="text-lg text-center mb-8">
        Choose where to stay and we'll show you who with!
      </p>

       
      <div className="flex space-x-4 items-center mb-10">
        <div className="bg-white text-gray-800 px-4 py-2 rounded-xl shadow-md max-w-xs">
          "Planning a trip to Bali! Anyone else?"
        </div>
        <img
          src="https://via.placeholder.com/50"
          alt="User 1"
          className="rounded-full w-12 h-12 border-2 border-orange-500"
        />
        <img
          src="https://via.placeholder.com/50"
          alt="User 2"
          className="rounded-full w-12 h-12 border-2 border-green-400"
        />
      </div>

       
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-lg p-6 text-gray-800 max-w-xl w-full"
      >
        <div className="grid gap-4">
          <input
            type="text"
            name="destination"
            placeholder="Destination"
            value={formData.destination}
            onChange={handleChange}
            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <div className="grid grid-cols-2 gap-4">
            <input
              type="date"
              name="checkIn"
              value={formData.checkIn}
              onChange={handleChange}
              className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="date"
              name="checkOut"
              value={formData.checkOut}
              onChange={handleChange}
              className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <input
            type="number"
            name="guests"
            placeholder="Number of Guests"
            value={formData.guests}
            onChange={handleChange}
            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            Let's go!
          </button>
        </div>
      </form>
    </div>
  );
}

export default TravelPromo;
