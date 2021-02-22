import CartStorage from '../services/CartStorage';

export const ACTIONS = {
  ADD: 'ADD',
  REMOVE: 'REMOVE',
  SET_QUANTITY: 'SET_QUANTITY',
  CLEAR: 'CLEAR',
};

export default function Cart(cart, action) {
  switch (action.type) {
    case ACTIONS.ADD: {
      const item = Object.assign(action.payload.item, { quantity: 1 });
      return CartStorage.save([...cart, item]);
    }
    case ACTIONS.REMOVE: {
      const values = cart.filter(value => value._id !== action.payload.item._id);
      return CartStorage.save(values);
    }
    case ACTIONS.SET_QUANTITY: {
      const index = cart.findIndex(value => value._id === action.payload.item._id);
      const values = [...cart];
      values[index].quantity = action.payload.quantity;
      return CartStorage.save(values);
    }
    case ACTIONS.CLEAR: {
      return CartStorage.save([]);
    }
    default: {
      return cart;
    }
  }
}