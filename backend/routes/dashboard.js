// backend/routes/dashboard.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Нийт хэрэглэгчдийн тоог авах API
router.get('/user-count', async (req, res) => {
  try {
    const count = await User.countDocuments();
    res.json({ count });
  } catch (error) {
    console.error('Error fetching user count:', error);
    res.status(500).json({ error: 'Серверийн алдаа' });
  }
});

module.exports = router;
