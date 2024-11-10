// src/components/NewProducts.jsx
import React from 'react';

const NewProducts = () => (
  <section className="p-8 bg-gray-50" id="new-products">
    <div className="flex justify-between items-center mb-8">
      <div className="flex items-center space-x-2">
        <span className="w-2 h-8 bg-green-700 rounded-sm"></span>
        <h2 className="text-3xl font-semibold text-gray-800">Шинэ бүтээгдэхүүн</h2>
      </div>
      
      <button className="border-2 border-green-700 text-green-700 px-6 py-2 rounded-full hover:bg-green-700 hover:text-white transition duration-300">
        Бүгдийг үзэх
      </button>
    </div>
    
    <div className="space-y-12">
      {/* Sprite New Product Card */}
      <ProductCard 
        image="src/assets/new.png" 
        title="Sprite new" 
        description="Цангис жимсний цэнгэг амтыг санагдуулах энэхүү Sprite ундаа таны баярын өдөрт гайхалтай нэмэлт болно!"
        buttonText="Дэлгүүр орох"
        isImageLeft={true}
      />

      {/* Smart Water Product Card */}
      <ProductCard 
        image="src/assets/new2.png" 
        title="Smart water" 
        description="Органик найрлага бүхий Smart ус – эрүүл амьдралын хэв маягт зориулагдсан таны хань."
        buttonText="Дэлгүүр орох"
        isImageLeft={false}
      />

      {/* Simply Orange Product Card */}
      <ProductCard 
        image="src/assets/new3.png" 
        title="Simply Orange" 
        description="Жүржийн жимсний амтыг жинхэнэ байгалийн бүтэн мэдрэмжээр танилцуулах Simply Orange шүүс."
        buttonText="Дэлгүүр орох"
        isImageLeft={true}
      />

      {/* BodyArmor Product Card */}
      <ProductCard 
        image="src/assets/new4.png" 
        title="BodyArmor" 
        description="Энерги нэмэх хүчирхэг BodyArmor ундаа – амьдралд шинэ эрч хүч нэмэх таны туслах."
        buttonText="Дэлгүүр орох"
        isImageLeft={false}
      />
    </div>
  </section>
);

// Product Card Component
const ProductCard = ({ image, title, description, buttonText, isImageLeft }) => (
  <div className={`flex flex-col ${isImageLeft ? 'md:flex-row' : 'md:flex-row-reverse'} bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl mx-auto`}>
    <div className="md:w-1/2 p-10 flex flex-col justify-between">
      <div>
        <h3 className="text-3xl font-bold mb-4">{title}</h3>
        <p className="text-lg text-gray-600">{description}</p>
      </div>
      <button className="mt-8 border-2 border-green-700 text-green-700 rounded-full px-8 py-3 hover:bg-green-700 hover:text-white transition duration-300">
        {buttonText}
      </button>
    </div>
    <div className="md:w-1/2 h-96">
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>
  </div>
);

export default NewProducts;
