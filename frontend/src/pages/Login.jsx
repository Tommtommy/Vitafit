// src/pages/Login.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

const Login = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, password }),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('token', data.token);
        if (data.isAdmin) {
          navigate('/dashboard'); // Хэрэв хэрэглэгч админ бол шууд Dashboard руу чиглүүлнэ
        } else {
          navigate('/shop'); // Энгийн хэрэглэгчийг худалдан авалтын хуудас руу чиглүүлнэ
        }
      } else {
        setError(data.error);
      }
    } catch (error) {
      console.error('Нэвтрэх алдаа:', error);
      setError('Сүлжээний алдаа');
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header Logo */}
      <div className="flex justify-center mt-4 mb-2">
        <Link to="/">
          <img src="src/assets/logo.jpg" alt="Vitafit Logo" className="h-24" />
        </Link>
      </div>

      {/* Main Content - Image болон Form хэсэг */}
      <div className="flex flex-grow h-[70vh]">
        {/* Left Side - Image (70%) */}
        <div className="w-7/12 h-full hidden md:flex items-center justify-center">
          <img src="src/assets/flag.jpg" alt="Vitafit Banner" className="w-full h-full object-cover" />
        </div>
        {/* Right Side - Login Form (30%) */}
        <div className="w-full md:w-5/12 flex items-center justify-center p-8 bg-white mb-8">
          <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-6">Нэвтрэх</h2>
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label className="block text-gray-700">Утас</label>
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
                Нэвтрэх
              </button>
              <div className="text-center mt-4">
                {/* Нууц үг мартсан холбоос */}
                <Link to="/Forgotpassword" className="text-green-700 hover:underline">
                  Нууц үг мартсан?
                </Link>
              </div>
            </form>
            {/* Шинээр хаяг нээх Button */}
            <div className="text-center mt-6">
              <Link to="/signup">
                <button
                  type="button"
                  className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition duration-300">
                  Шинээр хаяг нээх
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer хэсгийг нэмэхээс өмнө дээд талд зай нэмэх */}
      <div className="mt-8">
        <Footer />
      </div>
    </div>
  );
};

export default Login;
