 

import React from 'react';

function HostelCard({ name, discount, stars, location, image }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={image} alt={name} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-600">{location}</p>
        <div className="flex items-center mt-2">
          <span className="text-yellow-400">{'★'.repeat(stars)}</span>
          <span className="ml-2 text-sm text-gray-500">{stars} Stars</span>
        </div>
        <div className="flex justify-between items-center mt-3">
          <span className="text-xl font-bold text-orange-500">{discount}% OFF</span>
          <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition">Book Now</button>
        </div>
      </div>
    </div>
  );
}

export default HostelCard;
