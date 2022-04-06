import { useContext ,useReducer,createContext } from "react";
import { FilterReducerFun } from "./Reducer/FilterReducerFun";
const Filtercontext=createContext()

const FilterContextProvider = ({ children }) => {
  const [filterState, filterDispatch] = useReducer(FilterReducerFun, {
    instock: false,
    sortby: "",
    CatagoryMen: false,
    CatagoryWomen: false,
    CatagoryKids: false,
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
