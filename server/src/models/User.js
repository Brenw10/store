const mongoose = require('../config/Database');

const Collection = 'User';

const Schema = new mongoose.Schema({
  authId: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  image: { type: String, required: true },
  admin: { type: Boolean, required: true, default: false },
});

module.exports = mongoose.model(Collection, Schema, Collection);