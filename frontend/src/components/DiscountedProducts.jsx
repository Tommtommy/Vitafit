// src/components/DiscountedProducts.jsx
import React from 'react';

const DiscountedProducts = () => (
  <section className="p-8 bg-gray-50" id="discounted-products">
    <div className="flex items-center mb-8">
      <span className="w-2 h-8 bg-green-700 rounded-sm mr-2"></span>
      <h2 className="text-3xl font-semibold text-gray-800">Хямдрал</h2>
    </div>
    ``
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Product Card */}
      <ProductCard
        image="/path/to/vibez-cola.jpg"
        title="Vibez Cola"
        discount="-40%"
        currentPrice="1250₮"
        oldPrice="1560₮"
        rating="4.8"
        reviews="88"
      />
      <ProductCard
        image="/path/to/multi-vitamin.jpg"
        title="Мульти витамин"
        discount="-30%"
        currentPrice="1775₮"
        oldPrice="1900₮"
        rating="4.6"
        reviews="88"
      />
      <ProductCard
        image="/path/to/bubbly.jpg"
        title="Bubbly ус"
        discount="-20%"
        currentPrice="3600₮"
        oldPrice="4800₮"
        rating="4.5"
        reviews="88"
      />
    </div>
    
    <div className="mt-8 text-center">
      <button className="bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-800 transition duration-300">
        Бүх барааг үзэх
      </button>
    </div>
  </section>
);

// Product Card Component
const ProductCard = ({ image, title, discount, currentPrice, oldPrice, rating, reviews }) => (
  <div className="bg-white shadow-lg rounded-lg p-4 relative text-center">
    <span className="absolute top-2 left-2 bg-red-500 text-white text-sm px-2 py-1 rounded">{discount}</span>
    <img src={image} alt={title} className="w-full h-48 object-contain mb-4" />
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <div className="text-red-600 font-bold text-xl">{currentPrice}</div>
    <div className="text-gray-500 line-through mb-2">{oldPrice}</div>
    <div className="flex items-center justify-center mb-2">
      <span className="text-yellow-500 mr-1">★ {rating}</span>
      <span className="text-gray-500 text-sm">({reviews})</span>
    </div>
  </div>
);

export default DiscountedProducts;
