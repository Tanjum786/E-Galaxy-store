import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../../components";
import { useloginsignup } from "../../Context";
import "./Authentication.css";

export const Login = () => {
  const {showPassword,showPasswordFun}=useloginsignup();
  return (
    <>
      <div className="e_container">
        <Navbar auth="Signup" linkto="/signup" />
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
              <label for="useonClick={showiconfun}rPassword">Password*</label>
              <div className="showpassword_container">
                <input
                  type={showPassword}
                  name="password"
                  id="userPassword"
                  class="input_filed padding_small password_filed"
                  placeholder="Enter your Password"
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
              <Link to="/Forgotpassword" class="forget_password">
                <span>Forgot password ?</span>
              </Link>
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
