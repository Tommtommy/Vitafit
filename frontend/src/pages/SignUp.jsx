// src/pages/SignUp.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

const SignUp = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/Signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, password }),
      });

      const data = await response.json();
      if (response.ok) {
        alert('Хэрэглэгч амжилттай бүртгэгдлээ');
        navigate('/login');
      } else {
        setError(data.error);
      }
    } catch (error) {
      console.error('Бүртгэлийн алдаа:', error);
      setError('Сүлжээний алдаа');
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex justify-center mt-4 mb-2">
        <Link to="/">
          <img src="src/assets/logo.jpg" alt="Vitafit Logo" className="h-24" />
        </Link>
      </div>

      <div className="flex flex-grow h-[70vh]">
        <div className="w-7/12 h-full hidden md:flex items-center justify-center">
          <img src="src/assets/flag.jpg" alt="Vitafit Banner" className="w-full h-full object-cover" />
        </div>

        <div className="w-full md:w-5/12 h-full flex items-center justify-center p-8 bg-white">
          <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-6">Бүртгүүлэх</h2>
            <form onSubmit={handleSignUp}>
              <div className="mb-4">
                <label className="block text-gray-700">Нэр</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2 border rounded focus:outline-none focus:border-green-500"
                  placeholder="Таны нэр"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Утасны дугаар</label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-2 border rounded focus:outline-none focus:border-green-500"
                  placeholder="Утасны дугаар"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700">Нууц үг</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-2 border rounded focus:outline-none focus:border-green-500"
                  placeholder="Нууц үг"
                />
              </div>
              {error && <p className="text-red-500 text-center mb-4">{error}</p>}
              <button
                type="submit"
                className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800 transition duration-300 mb-4">
                Шинэ хаяг үүсгэх
              </button>
              <div className="text-center mt-4">
                <Link to="/login" className="text-orange-500 hover:underline">Бүртгэлтэй хаяг байгаа</Link>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <Footer />
      </div>
    </div>
  );
};

export default SignUp;
