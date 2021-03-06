import { addToWishlist, removefromCart, updateCart } from "../../../Apicalls";
import { Toast } from "../../../components/Toast";
import { useProducts } from "../../../Context";
const Cardcart = () => {
  const { productState, productDispatch } = useProducts();
  const { cart, wishList } = productState;
  const token = localStorage.getItem("token");

  const movetoWishlistHandler = (product) => {
    const wishlistItem = wishList?.find((item) => item._id === product._id);
    if (!wishlistItem) {
      addToWishlist(product, token, productDispatch);
      Toast(`Moved product ${product.title}to wishlist`, "success");
    }
    removefromCart(product._id, token, productDispatch);
  };

  return (
    <>
      {cart?.map(({ img, title, price, Quantity, _id }) => {
        return (
          <div className="cart_card_container bg_color dis_flex" key={_id}>
            <div className="img_container">
              <img className="cart_img" src={img} alt="image" />
            </div>
            <div className="card_detail">
              <h3>{title}</h3>
              <div className="cart_price dis_flex">
                <h4 className="price">₹ {price}</h4>
                <s className="cut_price">₹ {price * 2}</s>
              </div>
              <h6 className="cart_off">50%</h6>
              <div className="cart_quantity dis_flex">
                <span className="qunt">Quantity:</span>
                <button
                  className=" bg_color font_small"
                  disabled={Quantity > 1 ? false : true}
                  onClick={() => {
                    {
                      Quantity >= 1
                        ? updateCart(_id, "decrement", token, productDispatch)
                        : removefromCart(_id, token, productDispatch);
                    }
                  }}
                >
                  -
                </button>
                <p className="input_num font_small">{Quantity}</p>
                <button
                  className=" bg_color font_small"
                  disabled={Quantity <= 4 ? false : true}
                  onClick={() => {
                    {
                      Quantity >= 5
                        ? Toast(
                            `We're sorry! Only 5 unit(s) allowed in each order`,
                            "warning"
                          )
                        : "";
                    }
                    updateCart(_id, "increment", token, productDispatch);
                  }}
                >
                  +
                </button>
              </div>
              <div className="cart_btns dis_flex">
                <button
                  className="cart_remove_btn btn_cart font_small"
                  onClick={() => {
                    Toast(`Successfuly Removed ${title} from cart`, "success");
                    removefromCart(_id, token, productDispatch);
                  }}
                >
                  Remove From cart
                </button>
                <button
                  className="cart_wishlist_btn bg_color btn_cart font_small"
                  onClick={() => {
                    movetoWishlistHandler({ img, price, _id, title, Quantity });
                  }}
                >
                  Move to wishlist
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
export { Cardcart };
