import cartStore from '../services/cartStore';

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
      return cartStore.save([...cart, item]);
    }
    case ACTIONS.REMOVE: {
      const index = cart.findIndex(value => value.id === action.payload.item.id);
      const values = cart.filter((_, i) => i !== index);
      return cartStore.save(values);
    }
    case ACTIONS.SET_QUANTITY: {
      const index = cart.findIndex(value => value.id === action.payload.item.id);
      const values = [...cart];
      values[index].quantity = action.payload.quantity;
      return cartStore.save(values);
    }
    case ACTIONS.CLEAR: {
      return cartStore.save([]);
    }
    default: {
      return cart;
    }
  }
}