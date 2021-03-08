const User = require('../models/User');

function create(authId, user) {
  return User.updateOne({ authId }, user, { upsert: true });
}

module.exports = {
  create,
};