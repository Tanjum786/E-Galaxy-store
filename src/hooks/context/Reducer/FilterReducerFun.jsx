export const FilterReducerFun = (filterState, filterAction) => {
  switch (filterAction.type) {
    case "HIGH-TO-LOW":
      return { ...filterState, sortby: filterAction.type };

    case "LOW-TO-HIGH":
      return { ...filterState, sortby: filterAction.type };

    case "Four":
      return { ...filterState, Rating: filterAction.type };

    case "Three":
      return { ...filterState, Rating: filterAction.type };

    case "Two":
      return { ...filterState, Rating: filterAction.type };

    case "One":
      return { ...filterState, Rating: filterAction.type };

    case "MEN":
      return { ...filterState, CatagoryMen: filterAction.payload };

    case "WOMEN":
      return { ...filterState, CatagoryWomen: filterAction.payload };

    case "KIDS":
      return { ...filterState, CatagoryKids: filterAction.payload };
    case "RANGE":
      return { ...filterState, PriceValue: filterAction.payload };
    case "RESET":
      return {
        instock: false,
        sortby: "",
        CatagoryMen: false,
        CatagoryWomen: false,
        CatagoryKids: false,
        Rating: "",
        PriceValue: 3000,
      };

    default:
      return filterState;
  }
};
