const mongoose = require('../config/database');

const Schema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true, min: 0 },
  description: { type: Number, required: true },
  images: [{ type: String, required: true }],
  sizes: [{
    name: { type: String, required: true },
    quantity: { type: Number, required: true, min: 0, default: 0 },
  }],
});

module.exports = mongoose.model('store', Schema);