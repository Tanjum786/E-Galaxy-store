import { useProducts } from "../../../hooks/context/cart-wishlistcontext";

const Cardcart = () => {
  const { productState, productDispatch } = useProducts();
  const { mycart } = productState;

  return (
    <>
      {mycart.map(({ img, title, price, Quantity, _id }) => {
        return (
          <div className="cart_card_container bg_color dis_flex">
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
                  onClick={() =>
                    productDispatch({
                      type: "DECREASE",
                      payload: {
                        _id: _id,
                        Quantity: Quantity,
                      },
                    })
                  }
                >
                  -
                </button>
                <p className="input_num font_small">{Quantity}</p>
                <button
                  className="qunt_btn bg_color font_small"
                  onClick={() =>
                    productDispatch({
                      type: "INCREASE",
                      payload: {
                        _id: _id,
                        Quantity: Quantity,
                      },
                    })
                  }
                >
                  +
                </button>
              </div>
              <div className="cart_btns dis_flex">
                <button
                  className="cart_remove_btn btn_cart font_small"
                  onClick={() =>
                    productDispatch({
                      type: "REMOVE_FROM_CART",
                      payload: {
                        _id: _id,
                      },
                    })
                  }
                >
                  Remove From cart
                </button>
                <button
                  className="cart_wishlist_btn bg_color btn_cart font_small"
                  onClick={() =>
                    productDispatch({
                      type: "MOVE_TO_WISHLIST",
                      payload: {
                        img: img,
                        title: title,
                        price: price,
                        _id: _id,
                        Quantity: Quantity,
                      },
                    })
                  }
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
