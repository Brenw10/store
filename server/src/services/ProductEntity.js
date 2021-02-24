const Product = require('../models/Product');
const CategoryEntity = require('../services/CategoryEntity');

function create(product) {
  return Product.create(product);
}

function getAll() {
  return Product.find({ "sizes.quantity": { $gt: 0 } });
}

async function getByCategory(category) {
  const { categories } = await CategoryEntity.getCategoryChildren(category);
  return Product.find({
    category: {
      $in: [category, ...categories.map(value => value._id)]
    },
    "sizes.quantity": { $gt: 0 }
  });
}

function getById(_id) {
  return Product.find({ _id });
}

module.exports = {
  create,
  getAll,
  getByCategory,
  getById,
};