const mongoose = require('../config/Database');

const Collection = 'Category';

const Schema = new mongoose.Schema({
  name: { type: String, required: true },
  categories: [{ type: mongoose.Types.ObjectId, ref: Collection }],
});

module.exports = mongoose.model(Collection, Schema, Collection);