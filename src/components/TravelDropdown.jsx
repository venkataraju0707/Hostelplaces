import React, { useState } from "react";
import { FaGlobe, FaUser } from "react-icons/fa";
import { BsCurrencyExchange } from "react-icons/bs";

const TravelDropdown = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleDropdown = (section) => {
    setExpanded(expanded === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg w-[90%] max-w-md p-4">
        
        <h2 className="text-2xl font-bold mb-4">Travel Website Menu</h2>
        <ul className="space-y-4">
          <li>
            <div
              className="flex justify-between items-center cursor-pointer p-3 bg-gray-100 rounded-lg hover:bg-orange-100"
              onClick={() => toggleDropdown("accommodation")}
            >
              <span>Accommodation</span>
              <span>{expanded === "accommodation" ? "-" : "+"}</span>
            </div>
            {expanded === "accommodation" && (
              <div className="pl-6 mt-2 text-gray-600">
                <p>- Hotels</p>
                <p>- Hostels</p>
                <p>- B&Bs</p>
              </div>
            )}
          </li>

          <li>
            <div
              className="flex justify-between items-center cursor-pointer p-3 bg-gray-100 rounded-lg hover:bg-orange-100"
              onClick={() => toggleDropdown("explore")}
            >
              <span>Explore Hostelworld</span>
              <span>{expanded === "explore" ? "-" : "+"}</span>
            </div>
            {expanded === "explore" && (
              <div className="pl-6 mt-2 text-gray-600">
                <p>- Destinations</p>
                <p>- Blog</p>
                <p>- Offers</p>
              </div>
            )}
          </li>

          <li>
            <div
              className="flex justify-between items-center cursor-pointer p-3 bg-gray-100 rounded-lg hover:bg-orange-100"
              onClick={() => toggleDropdown("workWithUs")}
            >
              <span>Work With Us</span>
              <span>{expanded === "workWithUs" ? "-" : "+"}</span>
            </div>
            {expanded === "workWithUs" && (
              <div className="pl-6 mt-2 text-gray-600">
                <p>- Careers</p>
                <p>- Partnerships</p>
                <p>- Affiliates</p>
              </div>
            )}
          </li>

          <li>
            <div
              className="flex justify-between items-center cursor-pointer p-3 bg-gray-100 rounded-lg hover:bg-orange-100"
              onClick={() => toggleDropdown("help")}
            >
              <span>Help</span>
              <span>{expanded === "help" ? "-" : "+"}</span>
            </div>
            {expanded === "help" && (
              <div className="pl-6 mt-2 text-gray-600">
                <p>- FAQs</p>
                <p>- Contact Support</p>
              </div>
            )}
          </li>
        </ul>

         
         

         
      </div>
    </div>
  );
};

export default TravelDropdown;
