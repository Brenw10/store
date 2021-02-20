const Category = require('../models/Category');

function create(category) {
  return Category.create(category);
}

function update(category) {
  return Category.updateOne({ _id: category._id }, category, { upsert: true });
}

async function getAllCategories() {
  const categories = await Category.find({ categories: { $not: { $size: 0 } } }, { categories: 1, _id: 0 });
  return categories.reduce((array, value) => array.concat(value.categories), []);
}

async function getAll() {
  const categories = await getAllCategories();
  return Category.find({ _id: { $nin: categories } });
}

module.exports = {
  create,
  update,
  getAll,
};