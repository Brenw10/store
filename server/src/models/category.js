const mongoose = require('../config/database');

const Schema = new mongoose.Schema({
  name: { type: String, required: true },
  subCategory: [{ type: mongoose.Types.ObjectId, ref: 'Category' }],
});

module.exports = mongoose.model('Category', Schema);