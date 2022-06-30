export const ProductReducerFun = (productstate, productAction) => {
  switch (productAction.type) {
    case "ADD_TO_CART":
      return {
        ...productstate,
        cart: productAction.payload,
      };

    case "UPDATE_CART":
      return {
        ...productstate,
        cart: productAction.payload,
      };

    case "REMOVE_FROM_CART":
      return {
        ...productstate,
        cart: productAction.payload,
      };
    case "ADD_TO_WISHLIST":
      return {
        ...productstate,
        wishList: productAction.payload,
      };

    case "REMOVE_FROM_WISHLIST":
      return {
        ...productstate,
        wishList: productAction.payload,
      };

   

    default:
      break;
  }
};
