import { createContext, useContext, useReducer } from "react";
import { ProductReducerFun } from "./Reducer/productReducer";

const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [productState, productDispatch] = useReducer(ProductReducerFun, {
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
