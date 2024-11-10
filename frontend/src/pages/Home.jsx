// src/pages/Home.jsx
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import DiscountedProducts from '../components/DiscountedProducts';
import NewProducts from '../components/NewProducts';
import Categories from '../components/Categories';
import HiringSection from '../components/HiringSection';
import Footer from '../components/Footer';

const Home = () => (
  <div>
    <Header />
    <HeroSection />

    {/* Эдгээр хэсгүүдэд зөв id өгөх */}
    <section id="new-products">
      <NewProducts />
    </section>

    <section id="discounted-products">
      <DiscountedProducts />
    </section>

    <section id="category">
      <Categories />
    </section>

    <section id="events">
      <HiringSection />
    </section>

    <Footer />
  </div>
);

export default Home;
