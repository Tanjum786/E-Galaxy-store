const Cartbill = ({
  price,
  cartitem,
  DiscAmt,
  DeliveryAmt,
  TotalAmt,
  SaveAmt,
}) => {
  return (
    <div className="price_detailes_container bg_color">
      <ul className="check_out_list">
        <h3 className="price_title">Price Details</h3>
        <hr />
        <li className="li_flex dis_flex">
          <p className="cart_items font_small">price({cartitem} items)</p>
          <p className="cart_items font_small">₹ {price}</p>
        </li>
        <li className="li_flex dis_flex">
          <p className="cart_items font_small">Discount</p>
          <p className="cart_items font_small">₹ {DiscAmt}</p>
        </li>
        <li className="li_flex dis_flcart_itemex">
          <p className="cart_items font_small">Delivery Charges</p>
          <p className="cart_items font_small">₹ {DeliveryAmt}</p>
        </li>
        <hr />
        <li className="li_flex dis_flex">
          <h3 className="cart_items font_small">Total Amount</h3>
          <h3 className="cart_items font_small">₹ {TotalAmt}</h3>
        </li>
        <hr />
        <p className="cart_items  font_small">
          You will save ₹ {SaveAmt} on this order
        </p>
      </ul>
      <button className="place_order">
        Place order<a href="/"></a>
      </button>
    </div>
  );
};
export { Cartbill };
