import React from "react";
import { Footer, Navbar } from "../../components";
import './Authentication.css'


const Login = () => {
  return (
    <>
      <div className="e_container">
        <Navbar />
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
                <a class="forget_password" href="/pages/forgot_pass.html">
                  <span>Forgot password ?</span>
                </a>
              </div>
              <button type="submit" class="login_btn btn_style">
                <a href="/">Login</a>
              </button>
              <p class="new_account_link font_small">
                Not a user yet ?
                <a class="alert_primary" href="/pages/signup.html">
                  Creat account
                </a>
              </p>
            </div>
          </form>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Login;
