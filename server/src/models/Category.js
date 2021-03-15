const mongoose = require('../core/Database');

const Collection = 'Category';

const Schema = new mongoose.Schema({
  name: { type: String, required: true },
  categories: [{ type: mongoose.Types.ObjectId, ref: Collection }],
});

function populate(next) {
  this.populate('categories');
  next();
}

Schema.pre('find', populate);

module.exports = mongoose.model(Collection, Schema, Collection);