function saveStorage(cart) {
  if (cart) localStorage.setItem('cart', JSON.stringify(cart));
  return cart;
}

function getStorage() {
  const cart = localStorage.getItem('cart');
  return cart ? JSON.parse(cart) : [];
}

const service = {
  saveStorage,
  getStorage,
}

export default service;