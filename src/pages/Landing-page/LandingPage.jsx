import React from "react";
import "./Landing-page.css";
import {
  image1,
  image2,
  image4,
  image5,
  image6,
  image7,
  image3,
} from "../../assets/images";
import { Footer, Navbar } from "../../components";
import { Productcategory } from "./Component/Productcategory";
import { Categorybrand } from "./Component/Categorybrand";

export const LandingPage = () => {
  return (
    <>
      <div className="e_container">
        <Navbar auth={"Login"} />
        <div className="advertise_sale dis_flex">
          <div v>
            <a href="/index.html">
              <h1 className="e_website_name"> E-Galaxy-store </h1>
              <h5 className="ui_tagline"> Find it, love it, buy it. </h5>
            </a>
          </div>
          <div className="e_sales">
            <div className="offer"> 50 % off on exclusive products </div>
            <h4 className="sale_tagline">
              Life is hard enough already.Let us make it a little easier.
            </h4>
            <button className="shopnow_btn padding_small">
              <a href="/pages/product.html">
                Shop now <i className="fas fa-shopping-bag"> </i>
              </a>
            </button>
          </div>
        </div>
        <div className="categorey_container">
          <h3 className="category_heading"> Top Categories </h3>
          <div className="title_underline"> </div>
          <div className="categorey_list dis_flex">
            <Productcategory
              cardimg={image5}
              cardAlt={"image"}
              cardTitle={" Kid's Wear"}
            />
            <Productcategory
              cardimg={image6}
              cardAlt={"image"}
              cardTitle={"Mens's Wear"}
            />
            <Productcategory
              cardimg={image7}
              cardAlt={"image"}
              cardTitle={"Women's Wear"}
            />
          </div>
        </div>
        <div className="categorey_container">
          <h3 className="category_heading"> Top Brands </h3>
          <div className="title_underline"> </div>
          <div className="categorey_list dis_flex">
            <Categorybrand logoimage={image1} logalt={"logoBibi"} />
            <Categorybrand logoimage={image2} logalt={"logozara"} />
            <Categorybrand logoimage={image3} logalt={"logoAdidas"} />
            <Categorybrand logoimage={image4} logalt={"logogucci"} />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
