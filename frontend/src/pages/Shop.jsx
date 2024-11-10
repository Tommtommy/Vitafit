import React, { useEffect, useState } from 'react';

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Бараа авах үед алдаа гарлаа:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Дэлгүүр</h2>
      <div>
        {products.map((product) => (
          <div key={product._id} className="product-card">
            <h3>{product.name}</h3>
            <p>Үнэ: {product.price}₮</p>
            <p>Тоо ширхэг: {product.quantity}</p>
            <p>Тайлбар: {product.description}</p>
            {product.isDiscounted && (
              <p>Хямдрал: {product.discountPercentage}%</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
