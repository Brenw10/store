import Endpoint from '../core/Endpoint';

function getAll() {
  return Endpoint.get('product');
}

function getByCategory(category) {
  return Endpoint.get(`product/category/${category}`);
}

function create(token, product) {
  return Endpoint.post('product', product, { headers: { Authorization: token } });
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