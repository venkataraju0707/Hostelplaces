import React, { useState } from "react";

const HostelListing = () => {
  const [maxPrice, setMaxPrice] = useState(1000);

  const hostels = [
    {
      name: "Hotel Jashree",
      rating: 6.0,
      price: 799,
      distance: "1.1 km from city center",
      amenities: ["Wi-Fi"],
      image:
        "https://via.placeholder.com/300x200?text",  
    },
    {
      name: " Hello World",
      status: "Fast Selling",
      price: 750,
      amenities: ["Wi-Fi"],
      image:
        "https://via.placeholder.com/300x200?text",  
    },
  ];

  const filteredHostels = hostels.filter((hostel) => hostel.price <= maxPrice);

  return (
    <div className=" container mx-auto p-4">
     
      <header className="text-center my-4">
        <h1 className="text-2xl font-bold">Hostels in Visakhapatnam, India</h1>
        <p className="text-gray-600">Find your perfect stay!</p>
      </header>

       
      <div className="mb-6">
        <label htmlFor="priceFilter" className="block text-lg font-semibold mb-2">
          Filter by Price: ₹{maxPrice}
        </label>
        <input
          type="range"
          id="priceFilter"
          min="500"
          max="1000"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="w-full"
        />
      </div>

       
      <div className="grid gap-6">
        {filteredHostels.map((hostel, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 shadow-md bg-white flex flex-col md:flex-row"
          >
             
            <div className="w-full md:w-1/3">
              <img
                src={hostel.image}
                alt={hostel.name}
                className="rounded-lg w-full h-full object-cover"
              />
            </div>

            
            <div className="w-full md:w-2/3 p-4">
              <h2 className="text-xl font-bold">{hostel.name}</h2>
              {hostel.status && (
                <span className="text-red-500 text-sm font-semibold">
                  {hostel.status}
                </span>
              )}
              <p className="text-gray-600">Rating: {hostel.rating || "N/A"}</p>
              <p className="text-gray-600">
                {hostel.distance || "Distance N/A"}
              </p>
              <p className="text-gray-600">
                Amenities: {hostel.amenities.join(", ")}
              </p>
              <p className="text-lg font-bold">Starting at ₹{hostel.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HostelListing;
