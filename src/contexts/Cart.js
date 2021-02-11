import { createContext, useContext, useReducer } from "react";
import CartReducer, { ACTIONS } from '../reducers/Cart';
import cartStore from '../services/cartStore';

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(CartReducer, cartStore.get());

  const add = item => dispatch({ type: ACTIONS.ADD, payload: { item } });

  const setQuantity = (item, quantity) => dispatch({ type: ACTIONS.SET_QUANTITY, payload: { item, quantity } });

  const clear = () => dispatch({ type: ACTIONS.CLEAR });

  const remove = item => dispatch({ type: ACTIONS.REMOVE, payload: { item } });

  const get = id => cart.find(value => value.id === id);

  const getQuantity = () => cart.reduce((prev, value) => prev + value.quantity, 0);

  const getTotal = () => cart.reduce((prev, value) => prev + (value.quantity * value.price), 0).toFixed(2);

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