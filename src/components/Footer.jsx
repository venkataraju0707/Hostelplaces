import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
       
      <div className="bg-turquoise-500 text-white text-center py-6">
        <h2 className="text-2xl font-bold mb-2">Join our newsletter for travel deals and inspiration</h2>
        <button className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600">
          Subscribe Now
        </button>
      </div>

      
      <footer className="bg-gray-800 text-white py-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white"><FaFacebook size={24} /></a>
                <a href="#" className="text-gray-300 hover:text-white"><FaTwitter size={24} /></a>
                <a href="#" className="text-gray-300 hover:text-white"><FaInstagram size={24} /></a>
                <a href="#" className="text-gray-300 hover:text-white"><FaYoutube size={24} /></a>
                <a href="#" className="text-gray-300 hover:text-white"><FaTiktok size={24} /></a>
              </div>
            </div>

           
            <div>
              <h3 className="text-xl font-semibold mb-4">Accommodation</h3>
              <ul>
                <li><a href="#" className="text-gray-300 hover:text-white">Hostels</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Hotels</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Vacation Homes</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Customer Support</h3>
              <ul>
                <li><a href="#" className="text-gray-300 hover:text-white">Help Center</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">FAQs</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul>
                <li><a href="#" className="text-gray-300 hover:text-white">Terms & Conditions</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Blog</a></li>
              </ul>
            </div>
          </div>

          
          <div className="mt-10">
            <div className="flex justify-between">
              
              <div className="flex space-x-4">
                <button className="text-gray-300 hover:text-white">Language</button>
                <button className="text-gray-300 hover:text-white">Currency</button>
              </div>

              
              <div className="text-gray-300">
                <p>&copy; 2024 Travel Company. All Rights Reserved.</p>
                <a href="#" className="text-gray-300 hover:text-white">Work With Us</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
