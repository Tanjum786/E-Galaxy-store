import { removeFromWishlist } from "../../../Apicalls";
import { Toast } from "../../../components";
import { useAuth, useProducts } from "../../../Context";

const Wishlistcard = () => {
  const { productState, productDispatch } = useProducts();
  const { wishList } = productState;
  const {userDetailes}=useAuth()
  const {token}=userDetailes
  return (
    <>
      {wishList?.map(({ img, title, price, _id, Quantity, rating }) => {
        return (
          <div className="wishlist_card">
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
                  Toast(`Successfuly Moved ${title} to cart`, "success");
                  productDispatch({
                    type: "MOVE_TO_CART",
                    payload: {
                      img: img,
                      title: title,
                      price: price,
                      Quantity: Quantity,
                      _id: _id,
                    },
                  });
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
