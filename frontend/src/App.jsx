// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import AboutUs from './pages/AboutUs';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Forgotpassword" element={<ForgotPassword />} /> 
        <Route path="/Dashboard" element={<Dashboard/>} /> 
      </Routes>
    </Router>
  );
}

export default App;
