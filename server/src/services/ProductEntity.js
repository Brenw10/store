const Product = require('../models/Product');
const CategoryEntity = require('../services/CategoryEntity');

function create(product) {
  return Product.create(product);
}

function update(_id, product) {
  return User.updateOne({ _id }, product);
}

function getAllForSale() {
  return Product.find({ "sizes.quantity": { $gt: 0 } });
}

function getAll() {
  return Product.find();
}

async function getForSaleByCategory(category) {
  const { categories } = await CategoryEntity.getCategoryChildren(category);
  return Product.find({
    category: {
      $in: [category, ...categories.map(value => value._id)]
    },
    "sizes.quantity": { $gt: 0 }
  });
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
  getAllForSale,
  getForSaleByCategory,
  getById,
  getAll,
  getByCategory,
  update,
};