import { createContext, useContext, useReducer } from "react";
import { CartRedcerFun } from "./Reducer/CartRedcerFun";

const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [productState, productDispatch] = useReducer(CartRedcerFun, {
    mycart: [],
    mywishlist: [],
  });
  return (
    <CartContext.Provider value={{ productState, productDispatch }}>
      {children}
    </CartContext.Provider>
  );
};
const useProducts = () => useContext(CartContext);

export { useProducts, CartProvider };
