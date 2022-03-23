import React from "react";
import { image5, image6, image7 } from "../../assets/images";
import { Footer, Navbar } from "../../components";
import { Wishlistcard } from "./component/Wishlistcard";
import "./wishlist.css";

export const Wishlist = () => {
  return (
    <>
      <div className="e_container">
        <Navbar auth={"Login"} />
        <div>
          <h1 className="headline">My WishList</h1>
          <div className="title_underline"></div>
        </div>
        <section className="wishlist_container dis_flex">
          <Wishlistcard
            cardimg={image5}
            cardAlt={"image"}
            cardPrice= {2500}
            cardTitle={"Kid's Festive & party ware"}
            cardDic={"FTC Fashions"}
          />
          <Wishlistcard
            cardimg={image6}
            cardAlt={"image"}
            cardPrice={"Rs.2500"}
            cardTitle={"Kid's Festive & party ware"}
            cardDic={"FTC Fashions"}
          />
          <Wishlistcard
            cardimg={image7}
            cardAlt={"image"}
            cardPrice={"Rs.2500"}
            cardTitle={"Kid's Festive & party ware"}
            cardDic={"FTC Fashions"}
          />
        </section>
        <Footer />
      </div>
    </>
  );
};
