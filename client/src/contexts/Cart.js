import { createContext, useContext, useReducer } from "react";
import CartReducer, { ACTIONS } from '../reducers/Cart';
import CartStorage from '../services/CartStorage';

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(CartReducer, CartStorage.get());

  const add = item => dispatch({ type: ACTIONS.ADD, payload: { item } });

  const clear = () => dispatch({ type: ACTIONS.CLEAR });

  const remove = item => dispatch({ type: ACTIONS.REMOVE, payload: { item } });

  const setSize = (item, size) => dispatch({ type: ACTIONS.SET_SIZE, payload: { item, size } });

  const get = _id => cart.find(value => value._id === _id);

  return (
    <CartContext.Provider value={
      {
        cart,
        add,
        get,
        clear,
        remove,
        setSize,
      }
    }>{children}</CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}