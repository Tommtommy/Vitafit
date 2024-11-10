// src/components/Categories.jsx
import React from 'react';

const Categories = () => (
  <section className="p-8">
    <h2 className="text-2xl font-bold mb-4">Ангилал</h2>
    <div className="grid grid-cols-4 gap-4">
      <CategoryCard name="Ус" />
      <CategoryCard name="Ундаа" />
      <CategoryCard name="Жүүс" />
      <CategoryCard name="Нухаш" />
    </div>
  </section>
);

const CategoryCard = ({ name }) => (
  <div className="border p-4 rounded text-center">{name}</div>
);

export default Categories;
