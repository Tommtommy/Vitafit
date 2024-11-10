// src/components/HiringSection.jsx
import React from 'react';

const HiringSection = () => (
  <section className="p-8 bg-green-100">
    <h2 className="text-2xl font-bold mb-4">Ажлын зар</h2>
    <div className="flex space-x-4 overflow-x-scroll">
      <JobCard title="Санхүүгийн Менежер" />
      <JobCard title="Нягтлан Бодогч" />
    </div>
  </section>
);

const JobCard = ({ title }) => (
  <div className="border p-4 rounded bg-white text-center w-64 shadow-lg">
    <p className="font-bold">{title}</p>
    <p>Ажлын цаг: 08:00-17:00</p>
    <p>Утас: 8900-9040</p>
  </div>
);

export default HiringSection;
