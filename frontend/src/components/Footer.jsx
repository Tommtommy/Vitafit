// src/components/Footer.jsx
import React from 'react';
import { FiMapPin, FiMail, FiPhone, FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';

const Footer = () => (
  <footer className="bg-green-700 text-white py-10">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
      
      {/* Vitafit Group Section */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <h3 className="font-bold text-lg mb-4">Витафит групп</h3>
        <p className="mb-4">Бүртгүүлсэн бол 10% хөнгөлөлт аваарай</p>
        <div className="flex items-center space-x-2 w-full">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 w-full rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button className="px-4 py-2 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition duration-300">
            Subscribe
          </button>
        </div>
      </div>
      
      {/* Location and Contact Information */}
      <div className="flex flex-col items-center text-center md:text-left">
        <h3 className="font-bold text-lg mb-4">Байршил</h3>
        <p className="flex items-center mb-2"><FiMapPin className="mr-2" /> Улаанбаатар хот, Монгол улс</p>
        <p className="flex items-center mb-2"><FiMail className="mr-2" /> marketing@vitafit.mn</p>
        <p className="flex items-center"><FiPhone className="mr-2" /> +011 34 3434</p>
      </div>
      
      {/* Account Links */}
      <div className="flex flex-col items-center text-center md:text-left">
        <h3 className="font-bold text-lg mb-4">Миний булан</h3>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-orange-500 transition">Миний аккаунт</a></li>
          <li><a href="#" className="hover:text-orange-500 transition">Нэвтрэх / Бүртгүүлэх</a></li>
          <li><a href="#" className="hover:text-orange-500 transition">Сагс</a></li>
          <li><a href="#" className="hover:text-orange-500 transition">Хүслийн жагсаалт</a></li>
        </ul>
      </div>
    </div>

    {/* Social Media Icons and Copyright */}
    <div className="mt-8 border-t border-green-600 pt-6 text-center">
      <div className="flex justify-center space-x-6 mb-4">
        <a href="#" className="text-white hover:text-orange-500 transition"><FiFacebook size={20} /></a>
        <a href="#" className="text-white hover:text-orange-500 transition"><FiTwitter size={20} /></a>
        <a href="#" className="text-white hover:text-orange-500 transition"><FiInstagram size={20} /></a>
        <a href="#" className="text-white hover:text-orange-500 transition"><FiLinkedin size={20} /></a>
      </div>
      <p>&copy; 2024 Vitafit Group. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
