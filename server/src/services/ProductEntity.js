const Product = require('../models/Product');
const CategoryEntity = require('../services/CategoryEntity');

function create(product) {
  return Product.create(product);
}

function update(_id, product) {
  return Product.updateOne({ _id }, product);
}

function getAll() {
  return Product.find();
}

async function getByCategory(category) {
  const { categories } = await CategoryEntity.getCategoryChildren(category);
  return Product.find({
    category: {
      $in: [category, ...categories.map(value => value._id)]
    },
  });
}

function getById(_id) {
  return Product.findOne({ _id }).populate('category');
}

module.exports = {
  create,
  getById,
  getAll,
  getByCategory,
  update,
};