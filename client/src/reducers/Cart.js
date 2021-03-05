import CartStorage from '../services/CartStorage';

export const ACTIONS = {
  ADD: 'ADD',
  REMOVE: 'REMOVE',
  CLEAR: 'CLEAR',
  SET_SIZE: 'SET_SIZE',
};

export default function Cart(cart, action) {
  switch (action.type) {
    case ACTIONS.ADD: {
      return CartStorage.save([...cart, action.payload.item]);
    }
    case ACTIONS.REMOVE: {
      const values = cart.filter(value => value._id !== action.payload.item._id);
      return CartStorage.save(values);
    }
    case ACTIONS.SET_SIZE: {
      const values = cart.filter(value => value._id !== action.payload.item._id);
      const item = cart.find(value => value._id === action.payload.item._id);
      const index = item.sizes.findIndex(value => value._id === action.payload.size._id);
      item.sizes[index] = action.payload.size;
      return CartStorage.save([...values, item]);
    }
    case ACTIONS.CLEAR: {
      return CartStorage.save([]);
    }
    default: {
      return cart;
    }
  }
}