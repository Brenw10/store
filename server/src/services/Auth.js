const axios = require('axios');
const GOOGLE_API = require('../config/Auth');

function getUser(id_token) {
  return axios
    .get(GOOGLE_API, { params: { id_token } })
    .then(response => response.data);
}

module.exports = {
  getUser,
};