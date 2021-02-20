const Category = require('../models/Category');

function create(category) {
  return Category.create(category);
}

function update(category) {
  return Category.updateOne({ _id: category._id }, category, { upsert: true });
}

module.exports = {
  create,
  update,
};