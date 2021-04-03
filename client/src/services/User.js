import Endpoint from '../core/Endpoint';

function create(token) {
  return Endpoint.post('user', null, { headers: { Authorization: token } });
}

function get(token) {
  return Endpoint.get('user', { headers: { Authorization: token } });
}

function setAddress(token, address) {
  return Endpoint.post('user/address', address, { headers: { Authorization: token } });
}

const service = {
  create,
  get,
  setAddress,
}

export default service;