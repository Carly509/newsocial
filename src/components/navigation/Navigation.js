import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navigation = ({ loggedIn, setLoggedIn, setTriggeredLogout }) => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const logOutUser = () => {
    setTriggeredLogout(true);
    setLoggedIn(false);
    navigate('/');
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="w-full px-4 py-4 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <div className="bg-green-100 px-4 py-2 rounded-lg">
            <span className="text-gray-900 font-semibold text-xl">NewSocial</span>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="relative group">
            <button
              onClick={toggleDropdown}
              className="text-gray-600 hover:text-gray-900 font-medium flex items-center"
            >
              FEATURES
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 z-10 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <Link to="/feature1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                    Feature 1
                  </Link>
                  <Link to="/feature2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                    Feature 2
                  </Link>
                  <Link to="/feature3" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                    Feature 3
                  </Link>
                </div>
              </div>
            )}
          </div>
          <Link to="/privacy" className="text-gray-600 hover:text-gray-900 font-medium">
            PRIVACY
          </Link>
          <Link to="/help" className="text-gray-600 hover:text-gray-900 font-medium">
            HELP CENTRE
          </Link>
          <Link to="/blog" className="text-gray-600 hover:text-gray-900 font-medium">
            BLOG
          </Link>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-4">
          {loggedIn ? (
            <>
              <button
                onClick={logOutUser}
                className="text-gray-600 hover:text-gray-900 font-medium"
              >
                LOG OUT
              </button>
              <Link
                to="/profile"
                className="bg-indigo-900 text-white px-6 py-2 rounded-lg font-medium hover:bg-indigo-800 transition-colors"
              >
                PROFILE
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/sign-in"
                className="text-gray-600 hover:text-gray-900 font-medium"
              >
                LOG IN
              </Link>
              <Link
                to="/sign-up"
                className="bg-indigo-900 text-white px-6 py-2 rounded-lg font-medium hover:bg-indigo-800 transition-colors"
              >
                SIGN UP
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
