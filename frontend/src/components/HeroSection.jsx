// src/components/HeroSection.jsx
import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-scroll'; // Smooth scroll линкэд ашиглах

// slick carousel-ийн style файлууд
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HeroSection = () => {
  // Слайдер тохиргоо
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // 5 секунд тутамд солигдоно
  };

  return (
    <section className="relative flex">
      {/* Зүүн талын ангиллын цэс */}
      <div className="w-1/4 bg-gray-100 p-4">
        <ul className="space-y-2">
          <li><Link to="discounted-products" smooth={true} duration={500} className="cursor-pointer hover:text-green-700">Хямдралтай бараа</Link></li>
          <li><Link to="new-products" smooth={true} duration={500} className="cursor-pointer hover:text-green-700">Шинэ бүтээгдэхүүнүүд</Link></li>
          <li><Link to="category" smooth={true} duration={500} className="cursor-pointer hover:text-green-700">Ангилал</Link></li>
          <li><Link to="category" smooth={true} duration={500} className="cursor-pointer hover:text-green-700">Ус</Link></li>
          <li><Link to="category" smooth={true} duration={500} className="cursor-pointer hover:text-green-700">Ундаа</Link></li>
          <li><Link to="events" smooth={true} duration={500} className="cursor-pointer hover:text-green-700">Ажлын зар</Link></li>
        </ul>
      </div>

      {/* Hero Carousel */}
      <div className="w-4/5">
        <Slider {...settings} className="h-full">
          <div>
            <img src="src/assets/hero.jpg" alt="Image 1" className="w-full h-auto" />
          </div>
          <div>
            <img src="src/assets/hero-1.jpg" alt="Image 2" className="w-full h-auto" />
          </div>
          <div>
            <img src="src/assets/hero-2.jpg" alt="Image 3" className="w-full h-auto" />
          </div>
          {/* Шаардлагатай зурагнуудыг нэмнэ үү */}
        </Slider>
      </div>
    </section>
  );
};

export default HeroSection;
