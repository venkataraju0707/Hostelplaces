import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Bar() {
  const [destination, setDestination] = useState("");
  const [checkInDate, setCheckInDate] = useState("2023-12-16");
  const [checkOutDate, setCheckOutDate] = useState("2023-12-20");
  const [numGuests, setNumGuests] = useState(2);

  const navigate = useNavigate();

  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
  };

  const handleCheckInChange = (event) => {
    setCheckInDate(event.target.value);
  };

  const handleCheckOutChange = (event) => {
    setCheckOutDate(event.target.value);
  };

  const handleNumGuestsChange = (event) => {
    setNumGuests(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(`Destination: ${destination}`);
    console.log(`Check-in: ${checkInDate}`);
    console.log(`Check-out: ${checkOutDate}`);
    console.log(`Number of Guests: ${numGuests}`);

    
    navigate("/HostelListings", {
      state: {
        destination,
        checkInDate,
        checkOutDate,
        numGuests,
      },
    });
  };

  return (
<div className="bg-gradient-to-r h-screen flex items-center justify-center">
  <form className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl" onSubmit={handleSubmit}>
    <h2 className="text-2xl font-bold mb-4 text-center">Book Your Next Adventure</h2>

    <div className="flex flex-col space-y-4 mb-4">
      <div>
        <label htmlFor="destination" className="block text-gray-700 font-bold mb-2">
          Where do you want to go?
        </label>
        <input
          type="text"
          id="destination"
          value={destination}
          onChange={handleDestinationChange}
          className="border border-gray-300 rounded-md p-2 w-full"
          placeholder="Enter your destination"
          required
        />
      </div>

      <div>
        <label htmlFor="check-in" className="block text-gray-700 font-bold mb-2">
          Check-in
        </label>
        <input
          type="date"
          id="check-in"
          value={checkInDate}
          onChange={handleCheckInChange}
          className="border border-gray-300 rounded-md p-2 w-full"
          required
        />
      </div>

      <div>
        <label htmlFor="check-out" className="block text-gray-700 font-bold mb-2">
          Check-out
        </label>
        <input
          type="date"
          id="check-out"
          value={checkOutDate}
          onChange={handleCheckOutChange}
          className="border border-gray-300 rounded-md p-2 w-full"
          required
        />
      </div>

      <div>
        <label htmlFor="num-guests" className="block text-gray-700 font-bold mb-2">
          Number of Guests
        </label>
        <select
          id="num-guests"
          value={numGuests}
          onChange={handleNumGuestsChange}
          className="border border-gray-300 rounded-md p-2 w-full"
          required
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
    </div>

    <button
      type="submit"
      className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full w-full"
    >
      Let's Go!
    </button>
  </form>
</div>

  );
}

export default Bar;
