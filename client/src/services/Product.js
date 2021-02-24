import Endpoint from '../config/Endpoint';

function getAll() {
  return Endpoint.get('product');
}

function getByCategory(category) {
  return Endpoint.get(`product/category/${category}`);
}

function create(product) {
  return Endpoint.post('product', product);
}

function getById(_id) {
  return Endpoint.get(`product/${_id}`);
}

const service = {
  getAll,
  getByCategory,
  create,
  getById,
}

export default service;