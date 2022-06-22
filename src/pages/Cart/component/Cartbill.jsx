import { useProducts } from "../../../Context";

const Cartbill = () => {
  const { productState } =useProducts ();
  const { cart } = productState;

  const Price = cart.reduce(
    (accum, value) => value.price * 2 * value.Quantity + accum,
    0
  );
  const Discount = (Price * 50) / 100;
  const TotalPrice = Price - Discount;

  return (
    <div className="price_detailes_container bg_color">
      <ul className="check_out_list">
        <h3 className="price_title">Price Details</h3>
        <hr />
        <li className="li_flex dis_flex">
          <p className="cart_items font_small">price({cart.length} items)</p>
          <p className="cart_items font_small"> ₹{Price}</p>
        </li>
        <li className="li_flex dis_flex">
          <p className="cart_items font_small">Discount</p>
          <p className="cart_items font_small">- ₹ {Discount}</p>
        </li>
        <li className="li_flex dis_flex">
          <p className="cart_items font_small">Delivery Charges</p>
          <p className="cart_items font_small">Free</p>
        </li>
        <hr />
        <li className="li_flex dis_flex">
          <h3 className="cart_items font_small">Total Amount</h3>
          <h3 className="cart_items font_small">₹ {TotalPrice}</h3>
        </li>
        <hr />
        <p className="cart_items color_text font_small">
          You will save ₹ {Discount} on this order
        </p>
      </ul>
      <button className="place_order">Place order</button>
    </div>
  );
};
export { Cartbill };
