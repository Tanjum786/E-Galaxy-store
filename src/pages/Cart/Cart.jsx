import React from "react";
import { Link } from "react-router-dom";
import "./cart.css";
import { Navbar } from "../../components";
import { Emptycartimg } from "../../assets/images";
import { useProducts } from "../../Context";
import { Cardcart, Cartbill } from "./component";

export const Cart = () => {
  const { productState } = useProducts();
  const { cart } = productState;
  return (
    <div>
      <Navbar auth={"Login"} linkto={"/login"} />
      {cart.length <= 0 ? (
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
            <h1 className="products_titel">My Cart : ({cart.length})</h1>
            <div className="title_underline"></div>
          </div>
          <section className="cart_container dis_flex">
            <div>
              <Cardcart />
            </div>

            <Cartbill />
          </section>
        </>
      )}
    </div>
  );
};
