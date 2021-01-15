import { createContext, useContext, useReducer } from "react";
import CartReducer, { ACTIONS } from '../reducers/Cart';
import cartSerice from '../services/cart';

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(CartReducer, cartSerice.getStorage());

  const addProduct = item => dispatch({ type: ACTIONS.ADD, payload: { item } });

  const increaseProduct = item => dispatch({ type: ACTIONS.INCREASE, payload: { item, quantity: item.quantity + 1 } });

  const decreaseProduct = item => dispatch({ type: ACTIONS.DECREASE, payload: { item, quantity: item.quantity - 1 } });

  const clear = () => dispatch({ type: ACTIONS.CLEAR });

  const deleteProduct = item => dispatch({ type: ACTIONS.REMOVE, payload: { item } });

  const getProduct = id => cart.find(value => value.id === id);

  const getQuantity = () => cart.reduce((prev, value) => prev + value.quantity, 0);

  const getTotalPrice = () => cart.reduce((prev, value) => prev + (value.quantity * value.price), 0);

  const value = {
    cart,
    addProduct,
    increaseProduct,
    getProduct,
    getQuantity,
    clear,
    getTotalPrice,
    deleteProduct,
    decreaseProduct,
  };

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}