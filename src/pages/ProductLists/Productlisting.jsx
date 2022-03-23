import React from "react";
import { products } from "../../backend/db/products";
import { Footer } from "../../components/Footer-comp/Footer";
import { Navbar } from "../../components/Navbar-comp/Navbar";
import { Filtters } from "./component/Filtters";
import "./productpage.css";
export const Productlisting = () => {
  return (
    <>
      <div className="e_container">
        <Navbar auth={"Login"} />
        <section className="product_container dis_flex">
          <Filtters />
          <div className="product_card_list">
            <h1 className="headline">All Products</h1>
            <div className="all_cards_container dis_flex">
              {products.map((item) => {
                return (
                  <div className="product_card bg_color">
                    <div className="product_card_img">
                      <div className="product_wishlist_icon dis_flex">
                        <a href="/">
                          <i className="fa fa-heart-o"></i>
                        </a>
                      </div>
                      <img src={item.img} alt="image" />
                    </div>
                    <div className="rating_container">
                      <span className="rating">
                        <i className="fas fa-star icon_star"></i> {item.rating}
                      </span>
                    </div>
                    <div className="product_card_details gap_s dis_flex">
                      <span>{item.title}</span>
                      <h3>₹ {item.price}</h3>
                    </div>
                    <div>
                      <button className="add_to_cart bg_color padding_small">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};
