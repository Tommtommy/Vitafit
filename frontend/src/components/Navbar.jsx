// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-gray-100 py-2">
    <div className="flex justify-center space-x-4">
      <Link to="/" className="hover:text-green-700">Нүүр хуудас</Link>
      <Link to="/products" className="hover:text-green-700">Шинэ бүтээгдэхүүн</Link>
      <Link to="/discount" className="hover:text-green-700">Хямдралтай бараа</Link>
      <Link to="/about" className="hover:text-green-700">Бидний тухай</Link>
      <Link to="/contact" className="hover:text-green-700">Хүний нөөц</Link>
    </div>
  </nav>
);

export default Navbar;
