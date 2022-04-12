export const CartReducerFun = (cartstate, cartaction) => {
  const { cart, wishList } = cartstate;

  switch (cartaction.type) {
    case "ADD_TO_CART":
      const CartItem = cart.find(
        (item) => item._id === cartaction.payload._id
      );
      if (CartItem) {
        return {
          ...cartstate,
        };
      }
      return {
        ...cartstate,
        cart: [...cart, cartaction.payload],
      };
    case "INCREASE":
      return {
        ...cartstate,
        cart: cart.map((item) =>
          item._id === cartaction.payload._id
            ? {
                ...item,
                Quantity: item.Quantity < 5 ? item.Quantity + 1 : item.Quantity,
              }
            : item
        ),
      };
    case "DECREASE":
      return {
        ...cartstate,
        cart: cart.map((item) =>
          item._id === cartaction.payload._id
            ? {
                ...item,
                Quantity: item.Quantity > 1 ? item.Quantity - 1 : item.Quantity,
              }
            : item
        ),
      };
    case "REMOVE_FROM_CART":
      const RemoveItem = cart.filter(
        (item) => item._id !== cartaction.payload._id
      );
      return {
        ...cartstate,
        cart: RemoveItem,
      };
    case "ADD_TO_WISHLIST":
      const wishlistItem = wishList.find(
        (item) => item._id === cartaction.payload._id
      );
      if (wishlistItem) {
        return {
          ...cartstate,
        };
      }
      return {
        ...cartstate,
        wishList: [...wishList, cartaction.payload],
      };
    case "MOVE_TO_WISHLIST":
      const wishlistItems = wishList.find(
        (item) => item._id === cartaction.payload._id
      );
      if (wishlistItems) {
        return {
          ...cartstate,
          cart: cart.filter((item) => item._id != cartaction.payload._id),
        };
      }
      return {
        ...cartstate,
        wishList: [...wishList, cartaction.payload],
        cart: cart.filter((item) => item._id != cartaction.payload._id),
      };
    case "MOVE_TO_CART":
      const Movecart = cart.find(
        (item) => item._id === cartaction.payload._id
      );
      if (Movecart) {
        return {
          ...cartstate,
          wishList: wishList.filter(
            (item) => item._id != cartaction.payload._id
          ),
        };
      }
      return {
        ...cartstate,
        cart: [...cart, cartaction.payload],
        wishList: wishList.filter(
          (item) => item._id != cartaction.payload._id
        ),
      };
    case "REMOVE_FROM_WISHLIST":
      const RemoveWishList = wishList.filter(
        (item) => item._id !== cartaction.payload._id
      );
      return {
        ...cartstate,
        wishList: RemoveWishList,
      };

    default:
      break;
  }
};
