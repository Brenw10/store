const axios = require('axios');
const GOOGLE_API = require('../core/Auth');

function getUser(token) {
  return axios
    .get(GOOGLE_API, { params: { id_token: token } })
    .then(response => response.data);
}

module.exports = {
  getUser,
};