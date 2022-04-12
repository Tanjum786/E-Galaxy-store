import { createContext, useContext, useReducer } from "react";
import { CartReducerFun } from "./Reducer/CartReducerFun";

const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [productState, productDispatch] = useReducer(CartReducerFun, {
    cart: [],
    wishList: [],
  });
  return (
    <CartContext.Provider value={{ productState, productDispatch }}>
      {children}
    </CartContext.Provider>
  );
};
const useProducts = () => useContext(CartContext);

export { useProducts, CartProvider };
