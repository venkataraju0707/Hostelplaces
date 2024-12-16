import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import IconRow from "./IconRow";

const Navbar = () => {
  const [isLanguageDropdownVisible, setIsLanguageDropdownVisible] = useState(false);
  const [isCurrencyDropdownVisible, setIsCurrencyDropdownVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [selectedCurrency, setSelectedCurrency] = useState("INR");

  const languageDropdownRef = useRef(null);
  const currencyDropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        languageDropdownRef.current &&
        !languageDropdownRef.current.contains(event.target) &&
        currencyDropdownRef.current &&
        !currencyDropdownRef.current.contains(event.target)
      ) {
        setIsLanguageDropdownVisible(false);
        setIsCurrencyDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownVisible(!isLanguageDropdownVisible);
    if (isCurrencyDropdownVisible) setIsCurrencyDropdownVisible(false);
  };

  const toggleCurrencyDropdown = () => {
    setIsCurrencyDropdownVisible(!isCurrencyDropdownVisible);
    if (isLanguageDropdownVisible) setIsLanguageDropdownVisible(false);
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);  
    setIsLanguageDropdownVisible(false);
  };

  const handleCurrencySelect = (currency) => {
    setSelectedCurrency(currency);  
    setIsCurrencyDropdownVisible(false);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
         
        <div className="font-bold text-orange-600 text-xl">HOTELWORLD</div>

        
        <div className="flex items-center space-x-6">
           
          <Link
            to="/hostelworldpromo"
            className="bg-orange-600 text-white py-2 px-6 rounded-full hover:bg-orange-700 transition"
          >
            List your property
          </Link>

           
          <div className="relative" ref={languageDropdownRef}>
            <button
              onClick={toggleLanguageDropdown}
              className="bg-gray-200 text-gray-800 py-2 px-6 rounded-full hover:bg-orange-600 hover:text-white transition"
            >
              {selectedLanguage}  
            </button>
            {isLanguageDropdownVisible && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg border">
                <ul>
                  {["English", "Telugu","Hindi","Kannada","Malayalam"].map((language) => (
                    <li
                      key={language}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleLanguageSelect(language)}
                    >
                      {language}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

           
          <div className="relative" ref={currencyDropdownRef}>
            <button
              onClick={toggleCurrencyDropdown}
              className="bg-gray-200 text-gray-800 py-2 px-6 rounded-full hover:bg-orange-600 hover:text-white transition"
            >
              {selectedCurrency}  
            </button>
            {isCurrencyDropdownVisible && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg border">
                <ul>
                  {["INR", "USD", "EUR", "GBP", "JPY"].map((currency) => (
                    <li
                      key={currency}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleCurrencySelect(currency)}
                    >
                      {currency}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

           
          <IconRow />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
