import React from "react";
import { Link } from "react-router-dom";

export const Navbar = ({ auth,linkto }) => {
  return (
    <div className="nav_container">
    <nav className="nav_bar">
      <div>
        <Link to="/">
          <h1 className="e_website_name">E-Galaxy-store</h1>
          <h5 className="ui_tagline">Find it, love it, buy it.</h5>
        </Link>
      </div>
      <div className="search">
        <button>
          <i className="fa fa-search"></i>
        </button>
        <input type="text" placeholder=" Search Your Desier" name="search" />
      </div>
      <div>
        <ul className="nav_list">
          <li>
            <Link
              to="/product"
              className="product_btn padding_small font_small"
            >
              Products
            </Link>
          </li>
          <li>
            <Link to={linkto} className="login_btn">
              {auth}
            </Link>
          </li>
          <li className="list-item-inline">
            <Link to="/wishlist">
              <i className="icon_nav fa fa-heart-o"></i>
            </Link>
            <p className="badge_wishlist font_small dis_flex padding_small">
              0
            </p>
          </li>
          <li className="list-item-inline">
            <Link to="/cart">
              <i className="icon_nav fas fa-shopping-cart"></i>
            </Link>
            <p className="badge_cart font_small dis_flex padding_small">0</p>
          </li>
          <li className="list-item-inline">
            <Link to="/add usre">
              <i className="icon_nav fas fa-user"></i>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    </div>
  );
};
