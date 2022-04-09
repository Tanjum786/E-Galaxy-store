import React from "react";
import { wishlistimg } from "../../assets/images";
import { Footer, Navbar } from "../../components";
import { Link } from "react-router-dom";
import { useProducts } from "../../hooks/context/cart-wishlistcontext";
import { Wishlistcard } from "./component/Wishlistcard";
import "./wishlist.css";

export const Wishlist = () => {
  const { productState } = useProducts();
  const { mywishlist } = productState;
  return (
    <>
      <div>
        <Navbar auth={"Login"} linkto={"/login"} />
        {mywishlist.length <= 0 ? (
          <div className="cart_div">
            <img className="empty_cart" src={wishlistimg} alt="empty-cart" />
            <div className="empty_container">
              <h1>Your Wish-List is Empty</h1>
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
              <h1 className="products_titel">
                My wishlist : ({mywishlist.length})
              </h1>
              <div className="title_underline"></div>
            </div>
            <section className="wishlist_container dis_flex">
              <Wishlistcard />
            </section>
          </>
        )}
      </div>
    </>
  );
};
