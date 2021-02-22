const mongoose = require('../config/Database');

const Collection = 'Product';

const Schema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true, min: 0 },
  description: { type: String, required: true },
  images: [{ type: String, required: true }],
  category: { type: mongoose.Types.ObjectId, ref: 'Category' },
  sizes: [{
    name: { type: String, required: true },
    quantity: { type: Number, required: true, min: 0, default: 0 },
  }],
});

module.exports = mongoose.model(Collection, Schema, Collection);