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

export const LandingPage = () => {
  return ( 
    <>
      <div className="e_container">
        <Navbar />
        <div className="advertise_sale dis_flex">
          <div className="websiteName">
            <a href="/index.html">
              <h1 className="e_website_name"> E - Galaxy - store </h1>
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
            <div className="card_container">
              <a href="/">
                <img src={image5} alt="image" />
                <p className="card_overlay padding_small"> Kid 's Wear</p>
              </a>
            </div>
            <div className="card_container">
              <a href="/">
                <img src={image6} alt="image" />
                <p className="card_overlay padding_small"> Mens 's Wear</p>
              </a>
            </div>
            <div className="card_container">
              <a href="/">
                <img src={image7} alt="image" />
                <p className="card_overlay padding_small">
                  
                  Womens 's Wear
                </p>
              </a>
            </div>
          </div>
        </div>
        <div className="categorey_container">
          <h3 className="category_heading"> Top Brands </h3>
          <div className="title_underline"> </div>
          <div className="categorey_list dis_flex">
            <div className="logo_container">
              <img src={image1} alt="image" />
            </div>
            <div className="logo_container">
              <img src={image2} alt="image" />
            </div>
            <div className="logo_container">
              <img src={image3} alt="image" />
            </div>
            <div className="logo_container">
              <img src={image4} alt="image" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
