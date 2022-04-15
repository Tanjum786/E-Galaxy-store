import { useContext ,useReducer,createContext } from "react";
import { FilterReducerFun } from "./Reducer/FilterReducerFun";
const Filtercontext=createContext()

const FilterContextProvider = ({ children }) => {
  const [filterState, filterDispatch] = useReducer(FilterReducerFun, {
    instock: false,
    sortby: "",
    CategoryMen: false,
    CategoryWomen: false,
    CategoryKids: false,
    Rating: "",
    PriceValue: 3000
  });

  return (
      <Filtercontext.Provider value={{filterState,filterDispatch}} >
          {children}
      </Filtercontext.Provider>
  )
};

const useFilter=()=>useContext(Filtercontext)

export {useFilter,FilterContextProvider};
