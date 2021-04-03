const User = require('../models/User');

function create(authId, user) {
  return User.updateOne({ authId }, user, { upsert: true });
}

function getByAuthId(authId) {
  return User.findOne({ authId });
}

function isAdmin(authId) {
  return getByAuthId(authId).then(user => user.isAdmin);
}

function setAddress(_id, address) {
  return User.updateOne({ _id }, { address });
}

module.exports = {
  create,
  getByAuthId,
  isAdmin,
  setAddress,
};