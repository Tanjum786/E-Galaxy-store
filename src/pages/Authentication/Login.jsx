import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.production.min";
import { Footer, Navbar } from "../../components";
import "./Authentication.css";

export const Login = () => {

  return (
    <>
      <div className="e_container">
        <Navbar auth={"Signup"} linkto={'/signup'}/>
        <section class="e_login_signup_container dis_flex">
          <form>
            <div class="login_signup_container gap_s dis_flex">
              <h1 class="login_signup_name">Login</h1>
              <label for="userEmail">Email Address</label>
              <input
                type="email"
                name="email"
                id="userEmail"
                class="input_filed padding_small"
                placeholder="demo@demo.com"
                required
              />
              <label for="userPassword">Password*</label>
              <input
                type="password"
                name="password"
                id="userPassword"
                class="input_filed padding_small"
                placeholder="Enter your Password"
                required
              />
              <div class="checkbox_section dis_flex">
                <input
                  type="checkbox"
                  name="checkbox"
                  class="input_filed padding_small"
                  id="showpassword"
                  required
                />
                <label for="showpassword">Show Password</label>
                <Link to='/Forgotpassword' class="forget_password">
                <span>Forgot password ?</span>
                </Link>
              </div>
              <button type="submit" class="login_btn btn_style">
                Login
              </button>
              <p class="new_account_link font_small">
                Not a user yet ?
                <Link to="/signup" class="alert_primary">
                  Creat account
                </Link>
              </p>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};
