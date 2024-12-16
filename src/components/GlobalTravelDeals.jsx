import React from 'react';

function GlobalTravelDeals() {
  const hostels = [
    {
      name: 'New Friends Hostel & Bar',
      location: ' Visakhapatnam,AndhraPradesh',
      rating: '⭐⭐⭐⭐',
      discount: '60%',
      image: 'https://example.com/images/hostel1.jpg',
    },
    {
      name: 'Rivoli Cinema Hostel',
      location: 'Visakhapatnam,AndhraPradesh',
      rating: '⭐⭐⭐⭐⭐',
      discount: '15%',
      image: 'https://example.com/images/hostel2.jpg',
    },
    {
      name: 'ELTARI Pine House',
      location: 'Visakhapatnam,AndhraPradesh',
      rating: '⭐⭐⭐⭐',
      discount: '25%',
      image: 'https://example.com/images/hostel3.jpg',
    },
    {
      name: 'Sir Tobys Midtown',
      location: 'Visakhapatnam,AndhraPradesh',
      rating: '⭐⭐⭐⭐⭐',
      discount: '20%',
      image: 'https://example.com/images/hostel4.jpg',
    },
  ];

  return (
    <div className="bg-purple-900 text-white">
      <h1 className="text-4xl font-bold text-center text-pink-500 p-8">Global Travel Deals</h1>
      <p className="text-lg text-center text-pink-300 p-4">Free Cancellation & Flexible Booking</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-8">
        {hostels.map((hostel, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4">
            <img src={hostel.image} alt={hostel.name} className="rounded-t-lg" />
            <div className="p-4">
              <h2 className="text-xl font-bold">{hostel.name}</h2>
              <p className="text-gray-700">{hostel.location}</p>
              <p className="text-gray-500">{hostel.rating}</p>
              <p className="text-red-500 font-bold">-{hostel.discount}% OFF</p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GlobalTravelDeals;