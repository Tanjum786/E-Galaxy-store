const Cardcart = ({
  cardtitle,
  cartprice,
  cartimg,
  cutprice,
  discount,
  Quantity,
}) => {
  return (
    <>
      <div className="cart_card_container bg_color dis_flex">
        <div className="img_container">
          <img className="cart_img" src={cartimg} alt="image" />
        </div>
        <div className="card_detail">
          <h3>{cardtitle}</h3>
          <div className="cart_price dis_flex">
            <h4 className="price">₹ {cartprice}</h4>
            <s className="cut_price">₹ {cutprice}</s>
          </div>
          <h6 className="cart_off">₹ {discount}</h6>
          <div className="cart_quantity dis_flex">
            <span className="qunt">₹ {Quantity}</span>
            <button className="qunt_btn bg_color font_small" id="qunt_increase">
              +
            </button>
            <p className="input_num font_small"></p>
            <button className="qunt_btn bg_color font_small" id="qunt_decrease">
              -
            </button>
          </div>
          <div className="cart_btns dis_flex">
            <button className="cart_remove_btn btn_cart font_small">
              Remove From cart
            </button>
            <button className="cart_wishlist_btn bg_color btn_cart font_small">
              Move to wishlist
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export { Cardcart };
