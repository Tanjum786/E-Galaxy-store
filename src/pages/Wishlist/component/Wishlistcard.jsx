import { addTocart, removeFromWishlist, updateCart } from "../../../Apicalls";
import { Toast } from "../../../components";
import { useProducts } from "../../../Context";

const Wishlistcard = () => {
  const { productState, productDispatch } = useProducts();
  const { wishList, cart } = productState;
  const token = localStorage.getItem("token");

  const moveTocartHandler = (product) => {
    const items = cart?.find((item) => item._id === product._id);
    if (items) {
      updateCart(product._id, "increment", token, productDispatch);
      removeFromWishlist(product._id, token, productDispatch);
      Toast(
        `${product.title} already exists in cart, increased it's quantity`,
        "warn"
      );
    } else {
      addTocart(product, token, productDispatch);
      removeFromWishlist(product._id, token, productDispatch);
      Toast(`Successfuly added ${product.title} to cart`, "success");
    }
  };
  return (
    <>
      {wishList?.map(({ img, title, price, Quantity, _id }) => {
        return (
          <div className="wishlist_card" key={_id}>
            <div className="wishlist_img">
              <div className="wishlist_icon dis_flex">
                <button
                  className="wish-btn"
                  onClick={() => {
                    removeFromWishlist(_id, token, productDispatch);
                    Toast(
                      `Successfuly Removed ${title} from wishlist`,
                      "success"
                    );
                  }}
                >
                  <i className="fas fa-heart"></i>
                </button>
              </div>
              <img src={img} alt="product-img" />
            </div>
            <div className="wishlist_card_details padding_small dis_flex">
              <div className="title">{title}</div>
            </div>
            <div className="price_container dis_flex">
              <span className="price_tag padding_small">₹ {price}</span>
            </div>
            <div className="btn_container dis_flex">
              <button
                className="e_secondary_btn padding_small"
                onClick={() => {
                  moveTocartHandler({ img, title, price, Quantity, _id });
                }}
              >
                Move to Cart<i className="fa fa-shopping-cart cart_btn"></i>
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export { Wishlistcard };
