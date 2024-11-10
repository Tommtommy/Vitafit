// src/pages/ForgotPassword.jsx
import React, { useState } from 'react';

const ForgotPassword = () => {
  const [phone, setPhone] = useState('');
  const [codeSent, setCodeSent] = useState(false);
  const [resetCode, setResetCode] = useState('');

  const handleForgotPassword = (e) => {
    e.preventDefault();

    // 4 оронтой санамсаргүй тоо үүсгэх
    const generatedCode = Math.floor(1000 + Math.random() * 9000).toString();
    setResetCode(generatedCode);
    setCodeSent(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Нууц үг сэргээх</h2>
      <form onSubmit={handleForgotPassword} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <label className="block text-gray-700">Утасны дугаар</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full p-2 border rounded mb-4"
          placeholder="Таны утасны дугаар"
        />
        <button type="submit" className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800">
          Илгээх
        </button>
      </form>

      {/* Амжилттай илгээсэн тухай попап */}
      {codeSent && (
        <div className="mt-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
          <p>Таны утсанд 4 оронтой код илгээгдлээ: <span className="font-bold">{resetCode}</span></p>
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
