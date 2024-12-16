import React, { useState } from "react";

const Sidebar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex flex-col">
       
      <div className="p-4">
        <div className="bg-purple-600 text-white p-8 text-center rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold">Meet your people.</h1>
          <p className="text-xl mt-4">
            Choose where to stay and we'll show you who with!
          </p>
          <input
            type="text"
            placeholder="Where do you want to go?"
            className="mt-4 p-2 rounded-lg text-lg w-full md:w-2/3"
          />
        </div>

         
             
      </div>
    </div>
  );
};

export default Sidebar;
