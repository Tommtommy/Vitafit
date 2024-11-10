// src/components/Header.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiShoppingCart, FiUser, FiSearch } from 'react-icons/fi';

const Header = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState(0);

  const handleProfileClick = () => {
    navigate('/Login');
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow px-8 py-4"> {/* Added sticky, z-index, and background */}
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img src="src/assets/logo.jpg" alt="Vitafit Logo" className="h-12" />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-8">
          <NavLink to="/" label="Нүүр хуудас" />
          <NavLink to="/AboutUs" label="Бидний тухай" />
          <NavLink to="/shop" label="Дэлгүүр" />
          <NavLink to="/hr" label="Хүний нөөц" />
        </nav>

        {/* Right Side - Search, Cart, and Profile */}
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="relative mr-5">
            <input
              type="text"
              placeholder="Хайх зүйлээ оруулна уу?"
              className="border rounded-full py-2 px-4 w-64 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button className="absolute top-0 right-0 p-2">
              <FiSearch className="text-gray-500 w-5 h-5" />
            </button>
          </div>

          {/* Cart Icon */}
          <div className="relative">
            <Link to="/cart">
              <FiShoppingCart className="text-gray-600 w-6 h-6" />
              {cartItems > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
                  {cartItems}
                </span>
              )}
            </Link>
          </div>

          {/* Profile Icon */}
          <button onClick={handleProfileClick} className="text-gray-600 hover:text-gray-800">
            <FiUser className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

const NavLink = ({ to, label }) => (
  <Link
    to={to}
    className="relative text-gray-700 hover:text-green-700 group"
  >
    {label}
    <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-green-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
  </Link>
);

export default Header;
