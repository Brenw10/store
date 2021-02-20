const Category = require('../models/Category');

function create(category) {
  return Category.create(category);
}

module.exports = {
  create,
};