const Wishlistcard = ({ cardimg, cardAlt, cardTitle, cardPrice, cardDic }) => {
  return (
    <div className="wishlist_card">
      <div className="wishlist_img">
        <div className="wishlist_icon dis_flex">
          <a href="/">
            <i className="fas fa-heart"></i>
          </a>
        </div>
        <img src={cardimg} alt={cardAlt} />
      </div>
      <div className="wishlist_card_details padding_small dis_flex">
        <div className="title">{cardTitle}</div>
      </div>
      <div className="price_container dis_flex">
        <span className="price_tag padding_small">{cardPrice}</span>
        <span>{cardDic}</span>
      </div>
      <div className="btn_container dis_flex">
        <a href="/" className="e_secondary_btn padding_small">
          Move to Cart<i className="fa fa-shopping-cart cart_btn"></i>
        </a>
      </div>
    </div>
  );
};

export { Wishlistcard };
