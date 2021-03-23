const Category = require('../models/Category');
const mongoose = require('mongoose');

function create(category) {
  return Category.create(category);
}

function update(category) {
  return Category.updateOne({ _id: category._id }, category, { upsert: true });
}

function getParents() {
  return Category.find({ categories: { $not: { $size: 0 } } });
}

async function getChildren() {
  const categories = await getParents();
  return categories.reduce((array, value) => [...array, ...value.categories], []);
}

async function getFirstParents() {
  const categories = await getChildren();
  return Category.find({ _id: { $nin: categories } });
}

async function getCategoryChildren(category) {
  return Category.aggregate([
    {
      $match: { _id: mongoose.Types.ObjectId(category) },
    },
    {
      $graphLookup: {
        from: Category.collection.name,
        startWith: "$categories",
        connectFromField: "categories",
        connectToField: "_id",
        as: "categories",
      },
    },
  ]).then(result => result[0]);
}

module.exports = {
  create,
  update,
  getFirstParents,
  getCategoryChildren,
};