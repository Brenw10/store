import { createContext, useContext, useReducer } from "react";
import CartReducer, { ACTIONS } from '../reducers/Cart';
import CartStorage from '../services/CartStorage';

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(CartReducer, CartStorage.get());

  const add = item => dispatch({ type: ACTIONS.ADD, payload: { item } });

  const setQuantity = (item, quantity) => dispatch({ type: ACTIONS.SET_QUANTITY, payload: { item, quantity } });

  const clear = () => dispatch({ type: ACTIONS.CLEAR });

  const remove = item => dispatch({ type: ACTIONS.REMOVE, payload: { item } });

  const get = _id => cart.find(value => value._id === _id);

  const getQuantity = () => cart.reduce((prev, value) => prev + value.quantity, 0);

  const getTotal = () => cart.reduce((prev, value) => prev + (value.quantity * value.price), 0);

  return (
    <CartContext.Provider value={
      {
        cart,
        add,
        setQuantity,
        get,
        getQuantity,
        clear,
        getTotal,
        remove,
      }
    }>{children}</CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}