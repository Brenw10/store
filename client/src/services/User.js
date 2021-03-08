import Endpoint from '../config/Endpoint';

function create(token) {
  return Endpoint.post('user', null, { headers: { Authorization: token } });
}

const service = {
  create,
}

export default service;