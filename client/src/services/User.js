import Endpoint from '../config/Endpoint';

function create(token) {
  return Endpoint.post('user', null, { headers: { Authorization: token } });
}

function get(token) {
  return Endpoint.get('user', { headers: { Authorization: token } });
}

const service = {
  create,
  get,
}

export default service;