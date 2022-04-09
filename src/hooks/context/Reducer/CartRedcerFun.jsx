export const CartRedcerFun = (cartstate, cartaction) => {
  const { mycart, mywishlist } = cartstate;

  switch (cartaction.type) {
    case "ADD_TO_CART":
      const CartItem = mycart.find(
        (item) => item._id === cartaction.payload._id
      );
      if (CartItem) {
        return {
          ...cartstate,
        };
      }
      return {
        ...cartstate,
        mycart: [...mycart, cartaction.payload],
      };
    case "INCREASE":
      return {
        ...cartstate,
        mycart: mycart.map((item) =>
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
        mycart: mycart.map((item) =>
          item._id === cartaction.payload._id
            ? {
                ...item,
                Quantity: item.Quantity > 1 ? item.Quantity - 1 : item.Quantity,
              }
            : item
        ),
      };
    case "REMOVE_FROM_CART":
      const RemoveItem = mycart.filter(
        (item) => item._id !== cartaction.payload._id
      );
      return {
        ...cartstate,
        mycart: RemoveItem,
      };
    case "ADD_TO_WISHLIST":
      const wishlistItem = mywishlist.find(
        (item) => item._id === cartaction.payload._id
      );
      if (wishlistItem) {
        return {
          ...cartstate,
        };
      }
      return {
        ...cartstate,
        mywishlist: [...mywishlist, cartaction.payload],
      };
    case "MOVE_TO_WISHLIST":
      const wishlistItems = mywishlist.find(
        (item) => item._id === cartaction.payload._id
      );
      if (wishlistItems) {
        return {
          ...cartstate,
          mycart: mycart.filter((item) => item._id != cartaction.payload._id),
        };
      }
      return {
        ...cartstate,
        mywishlist: [...mywishlist, cartaction.payload],
        mycart: mycart.filter((item) => item._id != cartaction.payload._id),
      };
    case "MOVE_TO_CART":
      const Movecart = mycart.find(
        (item) => item._id === cartaction.payload._id
      );
      if (Movecart) {
        return {
          ...cartstate,
          mywishlist: mywishlist.filter(
            (item) => item._id != cartaction.payload._id
          ),
        };
      }
      return {
        ...cartstate,
        mycart: [...mycart, cartaction.payload],
        mywishlist: mywishlist.filter(
          (item) => item._id != cartaction.payload._id
        ),
      };
    case "REMOVE_FROM_WISHLIST":
      const RemoveWishList = mywishlist.filter(
        (item) => item._id !== cartaction.payload._id
      );
      return {
        ...cartstate,
        mywishlist: RemoveWishList,
      };

    default:
      break;
  }
};
