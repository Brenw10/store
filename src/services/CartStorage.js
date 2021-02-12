function save(cart) {
  if (cart) localStorage.setItem('cart', JSON.stringify(cart));
  return cart;
}

function get() {
  const cart = localStorage.getItem('cart');
  return cart ? JSON.parse(cart) : [];
}

const service = {
  save,
  get,
}

export default service;