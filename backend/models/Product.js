// Product model

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  mainprice:  {type: Number, required: false },
  saledprice:  {type: Number, required: false },
  desciption: { type: String, required: false },
  category: {type: String, required:false},
  quantity: { type: Number, required: false },
  thumbnail: {type: String, required:false},
  hidden: {type: Number, required: false, default: 0},
  created_at: {type: Number, required:false, default: Date.now()},
  updated_at: {type: Number, required: false, default: Date.now()}
});

module.exports = mongoose.model('Product', productSchema);
