function get() {
  const cart = localStorage.getItem('cart');
  return cart ? JSON.parse(cart) : [];
}

function set(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function setItem(item) {
  const card = get();
  const index = card.findIndex(value => value.id === item.id);
  if (index >= 0) {
    card[index].amount += 1;
    set(card);
  }
  else {
    set(card.concat(Object.assign(item, { amount: 1 })));
  }
}

export default {
  setItem,
  get,
};