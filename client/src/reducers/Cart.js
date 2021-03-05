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
      const newCart = [...cart];
      const itemIndex = cart.findIndex(value => value._id === action.payload.item._id);
      const sizeIndex = cart[itemIndex].sizes.findIndex(value => value._id === action.payload.size._id);
      newCart[itemIndex].sizes[sizeIndex] = action.payload.size;
      return CartStorage.save(newCart);
    }
    case ACTIONS.CLEAR: {
      return CartStorage.save([]);
    }
    default: {
      return cart;
    }
  }
}