import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth, useProducts } from "../Context";
import { Toast } from "./Toast";

export const Navbar = () => {
  const { productState } = useProducts();
  const { cart, wishList } = productState;
  const {
    Authdispatch,
    userDetailes: { user },
  } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const users = localStorage.getItem("users");
  const token = localStorage.getItem("token");

  const logoutHandler = () => {
    localStorage.removeItem("users");
    localStorage.removeItem("token");
    navigate("/");
    Authdispatch({ type: "LOGOUT" });
    Toast(`Successfuly logedout`, "success");
  };
  return (
    <div className="nav_container">
      <nav className="nav_bar">
        <div>
          <Link to="/">
            <h1 className="e_website_name">E-Galaxy-store</h1>
            <h5 className="ui_tagline">Find it, love it, buy it.</h5>
          </Link>
        </div>
        {location.pathname === "/login" ||
        location.pathname === "/signup" ? null : (
          <div className="search">
            <button>
              <i className="fa fa-search"></i>
            </button>
            <input
              type="text"
              placeholder=" Search Your Desire"
              name="search"
            />
          </div>
        )}
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
            {token && users ? (
              <button className="login_btn logout_btn" onClick={logoutHandler}>
                Logout
              </button>
            ) : (
              <li>
                <Link to="/login">
                  <button className="login_btn">Login</button>
                </Link>
              </li>
            )}
            <li className="list-item-inline">
              <div className="wish-cart-icon">
                <Link to="/wishlist">
                  <i className="icon_nav fa fa-heart-o"></i>
                </Link>
                {users && token ? (
                  <p className="badge_wishlist font_small dis_flex padding_small">
                    {wishList?.length >= 1 ? wishList.length : 0}
                  </p>
                ) : null}
              </div>
            </li>
            <li className="list-item-inline">
              <div className="wish-cart-icon">
                <Link to="/cart">
                  <i className="icon_nav fas fa-shopping-cart"></i>
                </Link>
                {users && token ? (
                  <p className="badge_cart font_small dis_flex padding_small">
                    {cart.length}
                  </p>
                ) : null}
              </div>
            </li>
            <li className="list-item-inline">
              <div className="user-container dis_flex">
                <Link to="/add usre">
                  <div className="icon-container-nav">
                    <i className="icon_nav fas fa-user"></i>
                  </div>
                  {token && users ? (
                    <div className="user-name"> {user.firstName}</div>
                  ) : null}
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
