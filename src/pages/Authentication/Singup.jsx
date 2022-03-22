import React from "react";
import { Footer, Navbar } from "../../components";
import "./Authentication.css";

export const Singup = () => {
  return (
    <>
      <div className="e_container">
        <Navbar auth={"Login"} />
        <section class="e_login_signup_container dis_flex">
          <form>
            <div class="login_signup_container signup_container gap_s dis_flex">
              <h1 class="login_signup_name">Sign Up</h1>
              <label for="firstname">
                First Name<small class="star_color font_small">*</small>
              </label>
              <input
                type="text"
                name="text"
                class="input_filed padding_small"
                placeholder="Enter you first name"
                id="firstname"
                required
              />
              <label for="lastname">
                Last Name<small class="star_color font_small">*</small>
              </label>
              <input
                type="text"
                name="text"
                class="input_filed padding_small"
                placeholder="Enter your Last name"
                required
              />
              <label for="Email">
                Email<small class="star_color font_small">*</small>
              </label>
              <input
                type="email"
                name="email"
                class="input_filed padding_small"
                placeholder="demo@demo.com"
              />
              <label for="password_singup">
                Password<small class="star_color font_small">*</small>
              </label>
              <input
                type="text"
                name="password"
                class="input_filed padding_small"
                placeholder="Enter your password"
                required
              />
              <label for="Confirm_pass">
                Confirm password<small class="star_color font_small">*</small>
              </label>
              <input
                type="password"
                name="password"
                class="input_filed padding_small"
                placeholder="Enter your password again"
                required
              />
              <div class="checkbox_section">
                <input
                  type="checkbox"
                  name="checkbox"
                  class="input_filed padding_small"
                  required
                />
                <label for="Terms">I accept all Terms & Conditions</label>
              </div>
              <button type="submit" class="login_btn  btn_style">
                <a href="/">Register</a>
              </button>
              <p class="new_account_link font_small">
                Already have account?{" "}
                <a class="alert_primary" href="/pages/login.html">
                  Login Here
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
