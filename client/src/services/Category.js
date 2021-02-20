import Endpoint from '../config/Endpoint';

function getAll() {
  return Endpoint.get('category');
}

const service = {
  getAll,
}

export default service;