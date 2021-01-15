import cartSerice from '../services/cart';

export const ACTIONS = {
  ADD: 'ADD',
  REMOVE: 'REMOVE',
  INCREASE: 'INCREASE',
  DECREASE: 'DECREASE',
  CLEAR: 'CLEAR',
};

export default function Cart(cart, action) {
  switch (action.type) {
    case ACTIONS.ADD: {
      const item = Object.assign(action.payload.item, { quantity: 1 });
      const values = cart.concat(item);
      return cartSerice.saveStorage(values);
    }
    case ACTIONS.REMOVE: {
      const index = cart.findIndex(value => value.id === action.payload.item.id);
      const values = [...cart];
      values.splice(index, 1);
      return cartSerice.saveStorage(values);
    }
    case ACTIONS.INCREASE: {
      const index = cart.findIndex(value => value.id === action.payload.item.id);
      const values = [...cart];
      values[index].quantity = action.payload.quantity;
      return cartSerice.saveStorage(values);
    }
    case ACTIONS.DECREASE: {
      const index = cart.findIndex(value => value.id === action.payload.item.id);
      const values = [...cart];
      values[index].quantity = action.payload.quantity;
      return cartSerice.saveStorage(values);
    }
    case ACTIONS.CLEAR: {
      return cartSerice.saveStorage([]);
    }
    default:
      return cart;
  }
}