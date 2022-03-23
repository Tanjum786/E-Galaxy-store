import React from "react";

export const Navbar = ({ auth }) => {
  return (
    <nav className="nav_bar">
      <div>
        <a href="/index.html">
          <h1 className="e_website_name">E-Galaxy-store</h1>
          <h5 className="ui_tagline">Find it, love it, buy it.</h5>
        </a>
      </div>
      <div className="search">
        <button>
          <i className="fa fa-search"></i>
        </button>
        <input type="text" placeholder=" Search Your Desire" name="search" />
      </div>
      <div>
        <ul className="nav_list">
          <li>
            <a
              className="product_btn padding_small font_small"
              href="/pages/product.html"
            >
              Products
            </a>
          </li>
          <li>
            <a className="login_btn" href="/pages/login.html">
              {auth}
            </a>
          </li>
          <li className="list-item-inline">
            <a href="/pages/wishlist.html">
              <i className="icon_nav fa fa-heart-o"></i>
            </a>
            <p className="badge_wishlist font_small dis_flex padding_small">
              0
            </p>
          </li>
          <li className="list-item-inline">
            <a href="/pages/cart.html">
              <i className="icon_nav fas fa-shopping-cart"></i>
            </a>
            <p className="badge_cart font_small dis_flex padding_small">0</p>
          </li>
          <li className="list-item-inline">
            <a href="/">
              <i className="icon_nav fas fa-user"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
