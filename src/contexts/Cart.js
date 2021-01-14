import { createContext, useState, useContext } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [products, setProducts] = useState([]);

  const addProduct = item => {
    const newItem = Object.assign(item, { quantity: 1 });
    setProducts(products.concat(newItem));
  };

  const increaseProduct = item => {
    const index = products.findIndex(value => value.id === item.id);
    const newProducts = [...products];
    newProducts[index].quantity++;
    setProducts(newProducts);
  }

  const getProduct = id => {
    return products.find(value => value.id === id);
  }

  const getQuantity = () => {
    return products.reduce((prev, value) => prev + value.quantity, 0);
  }

  const value = {
    products,
    addProduct,
    increaseProduct,
    getProduct,
    getQuantity,
  };

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}