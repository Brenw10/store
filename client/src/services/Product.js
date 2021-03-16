import Endpoint from '../core/Endpoint';

function getAllForSale() {
  return Endpoint.get('product/sale');
}

function getAll(token) {
  return Endpoint.get('product', { headers: { Authorization: token } });
}

function getForSaleByCategory(category) {
  return Endpoint.get(`product/sale/category/${category}`);
}

function getAllByCategory(token, category) {
  return Endpoint.get(`product/category/${category}`, { headers: { Authorization: token } });
}

function create(token, product) {
  return Endpoint.post('product', product, { headers: { Authorization: token } });
}

function update(token, _id, product) {
  return Endpoint.put(`product/${_id}`, product, { headers: { Authorization: token } });
}

function getById(_id) {
  return Endpoint.get(`product/${_id}`);
}

const service = {
  getAllForSale,
  getForSaleByCategory,
  create,
  getById,
  getAll,
  getAllByCategory,
  update,
}

export default service;