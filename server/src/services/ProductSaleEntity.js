const Product = require('../models/Product');
const CategoryEntity = require('../services/CategoryEntity');

function getAllForSale() {
  return Product.find({ "sizes.quantity": { $gt: 0 } });
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

module.exports = {
  getAllForSale,
  getForSaleByCategory,
};