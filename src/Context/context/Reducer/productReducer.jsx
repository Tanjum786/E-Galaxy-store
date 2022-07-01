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
      case "ADD-ADDRESS":
        return {
          ...productstate,
          addresses: productAction.payload,
        };
  
      case "ADD-NEW-ORDER":
        return {
          ...productstate,
          orders: productAction.payload,
        };
      case "REMOVE-ADDRESS":
        return {
          ...productstate,
          addresses: productAction.payload,
        };
      case "GET-Address":
        return {
          ...productstate,
          addresses: productAction.payload,
        };
      case "EDIT-ADDRESS":
        return {
          ...productstate,
          addresses: productAction.payload,
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
