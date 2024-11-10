// src/pages/AboutUs.jsx
import React from 'react';  
import Timeline from '../components/Timeline';
import Header from '../components/Header';

const AboutUs = () => {
  return (
    <div className="bg-white text-gray-700 leading-relaxed">
      {/* Header Component */}
      <Header />

      {/* Sub-Header with Navigation */}
      <section className="sticky top-0 z-50 bg-gray-900 text-white py-4 px-6">
        <div className="max-w-5xl mx-auto flex justify-around">
          <a href="#overview" className="hover:underline">Товч танилцуулга</a>
          <a href="#mission" className="hover:underline">Манай Түүх</a>
          <a href="#achievements" className="hover:underline">Амжилтууд</a>
          <a href="#team" className="hover:underline">Манай Баг</a>
        </div>
      </section>

      {/* Hero Section */}
      <section
        id="overview"
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: 'url(src/assets/about2.jpg)' }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Товч танилцуулга</h1>
            <p className="text-lg md:text-xl text-white max-w-3xl mx-auto">
              Витафит компани нь Монголын хүнсний салбарт тэргүүлэгч компаниудын нэг бөгөөд эрүүл, чанартай хүнсний бүтээгдэхүүнүүдийг үйлдвэрлэдэг.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="bg-gray-100 py-12 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <img src="src/assets/about.jpg" alt="Mission" className="w-full md:w-1/2 rounded-lg shadow-lg" />
          <div className="text-lg">
            <h3 className="text-3xl font-bold text-green-700 mb-4">Манай Түүх</h3>
            <p className="text-gray-600">
              Манай компани эрүүл хүнсний салбарт анхдагч байж, хэрэглэгчдийн эрүүл мэндийг хамгаалах үүргээ биелүүлж ирсэн билээ.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-12 bg-gray-50">
  <h3 className="text-3xl font-bold text-center text-green-700 mb-8">Үнэт зүйлс</h3>
  <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-around items-center gap-8">
    <div className="text-center w-64 h-64 rounded-full flex flex-col items-center justify-center bg-green-700 text-white p-6 shadow-lg">
      <h4 className="text-2xl font-bold mb-4">ЭРХЭМ ЗОРИЛГО</h4>
      <p className="text-sm">Технологийн хувьслыг бүтээгдэхүүнд шингээж, чадварлаг хамт олны бүтээсэн хүнсийг өдөр бүр танд хүргэнэ.</p>
    </div>
    <div className="text-center w-64 h-64 rounded-full flex flex-col items-center justify-center bg-blue-700 text-white p-6 shadow-lg">
      <h4 className="text-2xl font-bold mb-4">БИДНИЙ ҮНЭТ ЗҮЙЛ</h4>
      <p className="text-sm">Бүтээлч - Зарчимч. Хүндлэл - Итгэлцэл.</p>
    </div>
    <div className="text-center w-64 h-64 rounded-full flex flex-col items-center justify-center bg-yellow-700 text-white p-6 shadow-lg">
      <h4 className="text-2xl font-bold mb-4">АЛСЫН ХАРАА</h4>
      <p className="text-sm">Итгэл даасан эрүүл хэрэглээг үр хойчдоо өвлүүлнэ.</p>
    </div>
  </div>
</section>

      <section id="achievements">
      <Timeline />
    </section>
      {/* Additional sections */}
      <section id="team" className="bg-gray-100 py-12">
        <h3 className="text-3xl font-bold text-green-700 text-center mb-8">Манай Баг</h3>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <img src="src/assets/p1.jpg" alt="Team Member" className="w-32 h-32 rounded-full mx-auto mb-4" />
            <h4 className="text-xl font-semibold">Гишүүний Нэр</h4>
            <p className="text-green-500">Албан тушаал</p>
          </div>
          <div className="text-center">
            <img src="src/assets/p2.jpg" alt="Team Member" className="w-32 h-32 rounded-full mx-auto mb-4" />
            <h4 className="text-xl font-semibold">Гишүүний Нэр</h4>
            <p className="text-green-500">Албан тушаал</p>
          </div>
          <div className="text-center">
            <img src="src/assets/p3.jpg" alt="Team Member" className="w-32 h-32 rounded-full mx-auto mb-4" />
            <h4 className="text-xl font-semibold">Гишүүний Нэр</h4>
            <p className="text-green-500">Албан тушаал</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
