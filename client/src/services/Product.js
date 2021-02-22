import Endpoint from '../config/Endpoint';

function getAll() {
  return Endpoint.get('product');
}

function getByCategory(category) {
  return Endpoint.get(`product/${category}`);
}

const service = {
  getAll,
  getByCategory,
}

export default service;