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
      return { ...filterState, CategoryMen: filterAction.payload };

    case "WOMEN":
      return { ...filterState, CategoryWomen: filterAction.payload };

    case "KIDS":
      return { ...filterState, CategoryKids: filterAction.payload };

    case "RANGE":
      return { ...filterState, PriceValue: filterAction.payload };

    case "CLEAR_CATEGORY":
      const newFilterState = { ...filterState };
      for (let property in newFilterState) {
        if (property.includes("Category")) {
          newFilterState[property] = false;
        }
      }
      return {
        ...newFilterState,
      };

    case "RESET":
      return {
        instock: false,
        sortby: "",
        CategoryMen: false,
        CategoryWomen: false,
        CategoryKids: false,
        Rating: "",
        PriceValue: 3000,
      };

    default:
      return filterState;
  }
};
