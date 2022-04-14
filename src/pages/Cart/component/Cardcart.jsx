import { Toast } from "../../../components/Toast/Toast";
import { useProducts } from "../../../hooks/context/cart-wishlist-context";

const Cardcart = () => {
  const { productState, productDispatch } = useProducts();
  const { cart } = productState;

  return (
    <>
      {cart.map(({ img, title, price, Quantity, _id }) => {
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
                  className="qunt_btn bg_color font_small"
                  onClick={() => {
                    {
                      Quantity > 1
                        ? Toast(
                            `You've changed '${title}' QUANTITY to '${
                              Quantity - 1
                            }'`,
                            "success"
                          )
                        : "";
                    }
                    productDispatch({
                      type: "DECREASE",
                      payload: {
                        _id: _id,
                        Quantity: Quantity,
                      },
                    });
                  }}
                >
                  -
                </button>
                <p className="input_num font_small">{Quantity}</p>
                <button
                  className="qunt_btn bg_color font_small"
                  onClick={() => {
                    {
                      Quantity >= 5
                        ? Toast(
                            `We're sorry! Only 5 unit(s) allowed in each order`,
                            "warning"
                          )
                        : Toast(
                            `You've changed '${title}' QUANTITY to '${
                              Quantity + 1
                            }'`,
                            "success"
                          );
                    }
                    productDispatch({
                      type: "INCREASE",
                      payload: {
                        _id: _id,
                        Quantity: Quantity,
                      },
                    });
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
                    productDispatch({
                      type: "REMOVE_FROM_CART",
                      payload: {
                        _id: _id,
                      },
                    });
                  }}
                >
                  Remove From cart
                </button>
                <button
                  className="cart_wishlist_btn bg_color btn_cart font_small"
                  onClick={() => {
                    Toast(`Successfuly Moved ${title} to wishlist`, "success");
                    productDispatch({
                      type: "MOVE_TO_WISHLIST",
                      payload: {
                        img: img,
                        title: title,
                        price: price,
                        _id: _id,
                        Quantity: Quantity,
                      },
                    });
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
