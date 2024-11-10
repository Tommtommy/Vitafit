// backend/middleware/auth.js
const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '');
  if (!token) return res.status(401).json({ error: 'Хандалтын эрхгүй байна' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Хандалтын эрхгүй байна' });
  }
};

const admin = (req, res, next) => {
  if (!req.user.isAdmin) return res.status(403).json({ error: 'Зөвшөөрөлгүй байна' });
  next();
};

module.exports = { auth, admin };
