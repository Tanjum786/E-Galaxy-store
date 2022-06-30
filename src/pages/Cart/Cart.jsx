import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./cart.css";
import { AddressModal, Navbar } from "../../components";
import { Emptycartimg } from "../../assets/images";
import { useAuth, useProducts } from "../../Context";
import { AddessSelect, Cardcart, Cartbill, Checkoutbill } from "./component";

export const Cart = () => {
  const { productState } = useProducts();
  const { cart } = productState;
  const [showAddressModal, setAddressModal] = useState(false);
  const [selectAddress, setSelectAddress] = useState(null);
  const [checkout, setCheckout] = useState(false);
  const { userDetailes, authState, Authdispatch } = useAuth();
  const { token } = userDetailes;
  const { addresses } = authState;

  const Price = cart.reduce(
    (accum, value) => value.price * 2 * value.Quantity + accum,
    0
  );
  const Discount = (Price * 50) / 100;
  const TotalPrice = Price - Discount;

  return (
    <>
      <Navbar />
      {showAddressModal ? (
        <AddressModal
          showAddressModal={showAddressModal}
          setAddressModal={setAddressModal}
        />
      ) : null}
      {!checkout ? (
        cart.length <= 0 ? (
          <div className="cart_div">
            <img className="empty_cart" src={Emptycartimg} alt="empty-cart" />
            <div className="empty_container">
              <h1>Your Cart is Empty</h1>
              <Link to="/product">
                <button className="product_btn padding_small font_small">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
        ) : (
          <>
            <div>
              <h1 className="products_title">My Cart : ({cart.length})</h1>
              <div className="title_underline"></div>
            </div>
            <section className="cart_container dis_flex">
              <div>
                <Cardcart />
              </div>

              <Cartbill
                setCheckout={setCheckout}
                TotalPrice={TotalPrice}
                Discount={Discount}
                Price={Price}
              />
            </section>
          </>
        )
      ) : (
        <main>
          <h1 className="checkout-title">Check Out</h1>
          <section className="checkout-container">
            <AddessSelect
              setSelectAddress={setSelectAddress}
              setAddressModal={setAddressModal}
              addresses={addresses}
            />
            <Checkoutbill
              TotalPrice={TotalPrice}
              Discount={Discount}
              Price={Price}
              selectAddress={selectAddress}
            />
          </section>
        </main>
      )}
    </>
  );
};
