import Endpoint from '../core/Endpoint';

function getAll() {
  return Endpoint.get('category');
}

const service = {
  getAll,
}

export default service;