import React from "react";
import { Footer, Navbar } from "../../components";
import './Authentication.css'

export const Forgotpassword = () => {
  return (
    <>
      <div className="e_container">
        <Navbar auth={"Login"}/>
        <section class="e_login_signup_container dis_flex">
          <form>
            <div class="login_signup_container gap_s dis_flex">
              <h1 class="login_signup_name">Creat New Password</h1>
              <label for="userPassword">New Password</label>
              <input
                class="input_filed padding_small"
                type="text"
                name="text"
                placeholder="Enter Your new password"
                required
              />
              <label for="userPassword">Confirm Password</label>
              <input
                class="input_filed padding_small"
                name="password"
                type="password"
                placeholder="Enter again your password"
                required
              />
              <button type="submit" class="login_btn btn_style">
                <a href="/pages/login.html">Reset Password</a>
              </button>
            </div>
          </form>
        </section>
        <Footer />
      </div>
    </>
  );
};