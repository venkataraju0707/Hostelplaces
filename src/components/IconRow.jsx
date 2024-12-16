import React, { useState, useRef, useEffect } from "react";
import TravelDropdown from "./TravelDropdown";
import { useNavigate } from "react-router-dom";

function IconRow() {
  const [isProfileDropdownVisible, setIsProfileDropdownVisible] = useState(false);
  const [isMenuDropdownVisible, setIsMenuDropdownVisible] = useState(false);
  const [userEmail, setUserEmail] = useState('');  
  const profileDropdownRef = useRef(null);
  const menuDropdownRef = useRef(null);
  const navigate = useNavigate();

   
  const toggleProfileDropdown = () => {
    setIsProfileDropdownVisible((prev) => !prev);
    setIsMenuDropdownVisible(false);  
  };

   
  const toggleMenuDropdown = () => {
    setIsMenuDropdownVisible((prev) => !prev);
    setIsProfileDropdownVisible(false);  
  };

   
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileDropdownRef.current &&
        !profileDropdownRef.current.contains(event.target)
      ) {
        setIsProfileDropdownVisible(false);
      }
      if (
        menuDropdownRef.current &&
        !menuDropdownRef.current.contains(event.target)
      ) {
        setIsMenuDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

   
  const getInitial = (email) => {
    return email && email.length > 0 ? email[0].toUpperCase() : '';
  };

  return (
    <div className="relative flex justify-center items-center space-x-6 p-4">
       
      <div
        className="bg-gray-200 rounded-full border border-gray-400 p-3 cursor-pointer hover:bg-gray-300"
        onClick={toggleProfileDropdown}
      >
        {userEmail ? (
           
          <span className="text-white text-xl font-semibold">
            {getInitial(userEmail)}
          </span>
        ) : (
           
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-5-2.33-5-5s2.33-5 5-5 5 2.33 5 5-2.33 5-5 5z" />
          </svg>
        )}
      </div>

       
      {isProfileDropdownVisible && (
        <div
          ref={profileDropdownRef}
          className="absolute top-12 left-0 bg-white shadow-lg rounded-lg border w-48"
        >
          <ul className="py-2">
            <li
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setIsProfileDropdownVisible(false);
                navigate("/login");
              }}
            >
              Login
            </li>
            <li
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setIsProfileDropdownVisible(false);
                navigate("/SignUpPage");
              }}
            >
              Sign-Up
            </li>
          </ul>
        </div>
      )}

      
      <div
        className="bg-gray-200 rounded-full border border-gray-400 p-3 cursor-pointer hover:bg-gray-300"
        onClick={toggleMenuDropdown}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M4 6h16v2H4V6zm0 5h16v2H4V11zm0 5h16v2H4v-2z" />
        </svg>
      </div>

       
      {isMenuDropdownVisible && (
        <div
          ref={menuDropdownRef}
          className="absolute top-12 right-0 bg-white shadow-lg rounded-lg border w-64"
        >
          <TravelDropdown />
        </div>
      )}
    </div>
  );
}

export default IconRow;
