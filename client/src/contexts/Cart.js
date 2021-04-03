import { createContext, useContext, useReducer } from "react";
import CartReducer, { ACTIONS } from '../reducers/Cart';
import CartStorage from '../services/CartStorage';

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(CartReducer, CartStorage.get());

  const addItem = item => dispatch({ type: ACTIONS.ADD, payload: { item } });

  const clear = () => dispatch({ type: ACTIONS.CLEAR });

  const removeItem = item => dispatch({ type: ACTIONS.REMOVE, payload: { item } });

  const getItem = _id => cart.find(value => value._id === _id);

  const getBuying = _id => getItem(_id).sizes.reduce((sum, value) => sum + ~~value.buying, 0);

  const setBuying = (item, size, buying) => dispatch({ type: ACTIONS.SET_BUYING, payload: { item, size, buying } });

  const getTotalBuying = () => cart.reduce((sum, value) => sum + getBuying(value._id), 0);

  const getTotalPrice = () => cart.reduce((sum, value) => sum + getBuying(value._id) * value.price, 0);

  return (
    <CartContext.Provider value={
      {
        cart,
        addItem,
        getItem,
        clear,
        setBuying,
        getTotalBuying,
        getTotalPrice,
        getBuying,
        removeItem,
      }
    }>{children}</CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}