export const ProductReducerFun = (productstate, productAction) => {
  const { cart, wishList } = productstate;

  switch (productAction.type) {
    case "ADD_TO_CART":
      const CartItem = cart.find(
        (item) => item._id === productAction.payload._id
      );
      if (CartItem) {
        return {
          ...productstate,
        };
      }
      return {
        ...productstate,
        cart: [...cart, productAction.payload],
      };
    case "INCREASE":
      return {
        ...productstate,
        cart: cart.map((item) =>
          item._id === productAction.payload._id
            ? {
                ...item,
                Quantity: item.Quantity < 5 ? item.Quantity + 1 : item.Quantity,
              }
            : item
        ),
      };
    case "DECREASE":
      return {
        ...productstate,
        cart: cart.map((item) =>
          item._id === productAction.payload._id
            ? {
                ...item,
                Quantity: item.Quantity > 1 ? item.Quantity - 1 : item.Quantity,
              }
            : item
        ),
      };
    case "REMOVE_FROM_CART":
      const RemoveItem = cart.filter(
        (item) => item._id !== productAction.payload._id
      );
      return {
        ...productstate,
        cart: RemoveItem,
      };
    case "ADD_TO_WISHLIST":
      const wishlistItem = wishList.find(
        (item) => item._id === productAction.payload._id
      );
      if (wishlistItem) {
        return {
          ...productstate,
        };
      }
      return {
        ...productstate,
        wishList: [...wishList, productAction.payload],
      };
    case "MOVE_TO_WISHLIST":
      const wishlistItems = wishList.find(
        (item) => item._id === productAction.payload._id
      );
      if (wishlistItems) {
        return {
          ...productstate,
          cart: cart.filter((item) => item._id != productAction.payload._id),
        };
      }
      return {
        ...productstate,
        wishList: [...wishList, productAction.payload],
        cart: cart.filter((item) => item._id != productAction.payload._id),
      };
    case "MOVE_TO_CART":
      const Movecart = cart.find(
        (item) => item._id === productAction.payload._id
      );
      if (Movecart) {
        return {
          ...productstate,
          wishList: wishList.filter(
            (item) => item._id != productAction.payload._id
          ),
          cart: cart.map((item) =>
          item._id === productAction.payload._id
            ? {
                ...item,
                Quantity: item.Quantity < 5 ? item.Quantity + 1 : item.Quantity,
              }
            : item
        ),
        };
      }
      return {
        ...productstate,
        cart: [...cart, productAction.payload],
        wishList: wishList.filter(
          (item) => item._id != productAction.payload._id
        ),
      };
    case "REMOVE_FROM_WISHLIST":
      const RemoveWishList = wishList.filter(
        (item) => item._id !== productAction.payload._id
      );
      return {
        ...productstate,
        wishList: RemoveWishList,
      };

    default:
      break;
  }
};
