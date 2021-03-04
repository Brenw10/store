import { createContext, useContext, useReducer } from "react";
import CartReducer, { ACTIONS } from '../reducers/Cart';
import CartStorage from '../services/CartStorage';

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(CartReducer, CartStorage.get());

  const add = item => dispatch({ type: ACTIONS.ADD, payload: { item } });

  const clear = () => dispatch({ type: ACTIONS.CLEAR });

  const setSize = (item, size) => dispatch({ type: ACTIONS.SET_SIZE, payload: { item, size } });

  const get = _id => cart.find(value => value._id === _id);

  const getBuy = _id => get(_id).sizes.reduce((sum, value) => sum + ~~value.buy, 0);

  const getAllBuy = () => cart.reduce((sum, value) => sum + getBuy(value._id), 0);

  const getTotal = () => cart.reduce((sum, value) => sum + getBuy(value._id) * value.price, 0);

  return (
    <CartContext.Provider value={
      {
        cart,
        add,
        get,
        clear,
        setSize,
        getAllBuy,
        getTotal,
      }
    }>{children}</CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}