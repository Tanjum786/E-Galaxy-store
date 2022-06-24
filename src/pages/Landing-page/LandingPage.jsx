import React from "react";
import "./Landing-page.css";
import {
  image1,
  image2,
  image4,
  image3,
  image5,
  image6,
  image7,
} from "../../assets/images";
import { Navbar } from "../../components";
import { Productcategory } from "./Component/Productcategory";
import { Categorybrand } from "./Component/Categorybrand";
import { Link } from "react-router-dom";

export const LandingPage = () => {
  return (
    <>
      <div className="e_container">
        <Navbar/>
        <div className="advertise_sale dis_flex">
          <div>
            <Link to="/">
              <h1 className="e_website_name"> E-Galaxy-store </h1>
              <h5 className="ui_tagline"> Find it, love it, buy it. </h5>
            </Link>
          </div>
          <div className="e_sales">
            <div className="offer"> 50 % off on exclusive products </div>
            <h4 className="sale_tagline">
              Life is hard enough already.Let us make it a little easier.
            </h4>
            <button className="shopnow_btn padding_small">
              <Link to="/product">
                Shop now <i className="fas fa-shopping-bag"> </i>
              </Link>
            </button>
          </div>
        </div>
        <div className="categorey_container">
          <h3 className="category_heading"> Top Categories </h3>
          <div className="title_underline"> </div>
          <div className="categorey_list dis_flex">
            <Productcategory
              productImage={image5}
              cardAlt={"image"}
              categoryName="Kid's wear"
            />
            <Productcategory
              productImage={image6}
              cardAlt={"image"}
              categoryName="Men's wear"
            />
            <Productcategory
              productImage={image7}
              cardAlt={"image"}
              categoryName="Women's wear"
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
      </div>
    </>
  );
};
