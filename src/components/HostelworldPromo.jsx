import React from 'react';

function HostelworldPromo() {
  return (
    <div className="bg-gray-100 min-h-screen">
      
      <header className="bg-gradient-to-r from-purple-500 to-purple-800 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">Want guests who love hostels?</h1>
          <button className="bg-white text-purple-700 hover:bg-purple-700 hover:text-white font-bold py-3 px-6 rounded-full">
            List Your Property
          </button>
        </div>
      </header>

      
      

      
      <footer className="bg-gray-200 py-10">
        <div className="container mx-auto text-center">
          <button className="bg-purple-700 text-white hover:bg-purple-800 hover:text-white font-bold py-3 px-6 rounded-full mr-4">
            Log In
          </button>
          <button className="bg-white text-purple-700 hover:bg-purple-700 hover:text-white font-bold py-3 px-6 rounded-full">
            Sign Up
          </button>
        </div>
      </footer>
    </div>
  );
}

export default HostelworldPromo;