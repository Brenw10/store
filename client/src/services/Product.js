import Endpoint from '../config/Endpoint';

function getAll() {
  return Endpoint.get('product');
}

function getByCategory(category) {
  return Endpoint.get(`product/${category}`);
}

function create(product) {
  return Endpoint.post('product', product);
}

const service = {
  getAll,
  getByCategory,
  create,
}

export default service;