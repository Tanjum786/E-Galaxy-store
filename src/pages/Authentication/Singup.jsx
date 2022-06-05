import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../../components";
import { useloginsignup } from "../../Context";
import "./Authentication.css";

export const Singup = () => {
  const { showPassword, showPasswordFun } = useloginsignup();
  return (
    <>
      <div className="e_container">
        <Navbar auth="Login" linkto="/login" />
        <section class="e_login_signup_container dis_flex">
          <form>
            <div class="login_signup_container signup_container gap_s dis_flex">
              <h1 class="login_signup_name">Sign Up</h1>
              <label htmlFor="firstname">
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
              <label htmlFor="lastname">
                Last Name<small class="star_color font_small">*</small>
              </label>
              <input
                type="text"
                name="text"
                class="input_filed padding_small"
                placeholder="Enter your Last name"
                required
              />
              <label htmlFor="Email">
                Email<small class="star_color font_small">*</small>
              </label>
              <input
                type="email"
                name="email"
                class="input_filed padding_small"
                placeholder="demo@demo.com"
              />
              <label htmlFor="password_singup">
                Password<small class="star_color font_small">*</small>
              </label>
              <input
                type="text"
                name="password"
                class="input_filed padding_small"
                placeholder="Enter your password"
                required
              />
              <label htmlFor="Confirm_pass">
                Confirm password<small class="star_color font_small">*</small>
              </label>
              <div className="showpassword_container">
                <input
                  type={showPassword}
                  name="password"
                  class="input_filed padding_small password_filed"
                  placeholder="Enter your Password again"
                  required
                />
                {showPassword === "password" ? (
                  <i
                    class="fa-solid fa-eye-slash eye_slash"
                    onClick={showPasswordFun}
                  ></i>
                ) : (
                  <i
                    class="fa-solid fa-eye eye_slash"
                    onClick={showPasswordFun}
                  ></i>
                )}
              </div>
              <div class="checkbox_section">
                <input
                  type="checkbox"
                  name="checkbox"
                  class="input_filed padding_small"
                  id="terms"
                  required
                />{" "}
                <label htmlFor="terms">I accept all Terms & Conditions</label>
              </div>
              <button type="submit" class="login_btn  btn_style">
                Register
              </button>
              <p class="new_account_link font_small">
                Already have account?
                <Link to="/login" class="alert_primary">
                  Login Here
                </Link>
              </p>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};
