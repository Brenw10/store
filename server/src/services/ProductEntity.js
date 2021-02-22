const Product = require('../models/Product');

function create(product) {
  return Product.create(product);
}

function getAll() {
  return Product.find({ "sizes.quantity": { $gt: 0 } });
}

function getByCategory(category) {
  return Product.find({ category, "sizes.quantity": { $gt: 0 } });
}

module.exports = {
  create,
  getAll,
  getByCategory,
};