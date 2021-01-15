import { createContext, useState, useContext } from "react";

export const CartContext = createContext();

const cart = localStorage.getItem('cart');

export default function CartProvider({ children }) {
  const [products, setProducts] = useState(cart ? JSON.parse(cart) : []);

  const addProduct = item => {
    const newItem = Object.assign(item, { quantity: 1 });
    const newProducts = products.concat(newItem);
    setProducts(newProducts);
    localStorage.setItem('cart', JSON.stringify(newProducts));
  };

  const increaseProduct = item => {
    const index = products.findIndex(value => value.id === item.id);
    const newProducts = [...products];
    newProducts[index].quantity++;
    setProducts(newProducts);
    localStorage.setItem('cart', JSON.stringify(products));
  }

  const getProduct = id => {
    return products.find(value => value.id === id);
  }

  const getQuantity = () => {
    return products.reduce((prev, value) => prev + value.quantity, 0);
  }

  const clear = () => {
    setProducts([]);
    localStorage.clear('cart');
  };

  const getTotalPrice = () => {
    return products.reduce((prev, value) => prev + (value.quantity * value.price), 0);
  }

  const deleteProduct = product => {
    const index = products.findIndex(value => value.id === product.id);
    const newProducts = [...products];
    newProducts.splice(index, 1);
    setProducts(newProducts);
    localStorage.setItem('cart', JSON.stringify(products));
  };

  const decreaseProduct = product => {
    const index = products.findIndex(value => value.id === product.id);
    const newProducts = [...products];
    newProducts[index].quantity--;
    setProducts(newProducts);
    localStorage.setItem('cart', JSON.stringify(products));
  };

  const value = {
    products,
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