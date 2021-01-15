import { createContext, useContext, useReducer } from "react";
import CartReducer, { ACTIONS } from '../reducers/Cart';
import cartSerice from '../services/cart';

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(CartReducer, cartSerice.getStorage());

  const add = item => dispatch({ type: ACTIONS.ADD, payload: { item } });

  const increase = item => dispatch({ type: ACTIONS.INCREASE, payload: { item, quantity: item.quantity + 1 } });

  const decrease = item => dispatch({ type: ACTIONS.DECREASE, payload: { item, quantity: item.quantity - 1 } });

  const clear = () => dispatch({ type: ACTIONS.CLEAR });

  const remove = item => dispatch({ type: ACTIONS.REMOVE, payload: { item } });

  const getProduct = id => cart.find(value => value.id === id);

  const getQuantity = () => cart.reduce((prev, value) => prev + value.quantity, 0);

  const getTotalPrice = () => cart.reduce((prev, value) => prev + (value.quantity * value.price), 0);

  const value = {
    cart,
    add,
    increase,
    getProduct,
    getQuantity,
    clear,
    getTotalPrice,
    remove,
    decrease,
  };

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}