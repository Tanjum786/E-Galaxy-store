import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "../../components";
import { useAuth, useloginsignup } from "../../Context";
import "./Authentication.css";

export const Login = () => {
  const { showPassword, showPasswordFun } = useloginsignup();
  const { authState, loginPage, Authdispatch } = useAuth();
  const { email, password, isSubmit } = authState;

  const loginHandaler = (e) => {
    e.preventDefault();
    Authdispatch({ type: "LOGIN_SUBMIT" });
  };
  const guestLoginHandler = (e) => {
    e.preventDefault();
    Authdispatch({
      type: "GUEST-LOGIN",
      payload: { email: "guest@gmail.com", password: "guest1234" },
    });
  };
  useEffect(() => {
    if (isSubmit) {
      loginPage(email, password);
    }
  }, [isSubmit]);

  return (
    <>
      <div className="e_container">
        <Navbar auth="Signup" linkto="/signup" />
        <section className="e_login_signup_container dis_flex">
          <form onSubmit={loginHandaler}>
            <div className="login_signup_container gap_s dis_flex">
              <h1 className="login_signup_name">Login</h1>
              <label htmlFor="userEmail">Email Address</label>
              <input
                type="email"
                name="email"
                id="userEmail"
                className="input_filed padding_small"
                placeholder="demo@demo.com"
                value={email}
                onChange={(e) =>
                  Authdispatch({ type: "EMAIL", payload: e.target.value })
                }
                required
              />
              <label htmlFor="useonClick={showiconfun}rPassword">
                Password*
              </label>
              <div className="showpassword_container">
                <input
                  type={showPassword}
                  name="password"
                  id="userPassword"
                  className="input_filed padding_small password_filed"
                  placeholder="Enter your Password"
                  value={password}
                  onChange={(e) =>
                    Authdispatch({ type: "PASSWORD", payload: e.target.value })
                  }
                  required
                />
                {showPassword === "password" ? (
                  <i
                    className="fa-solid fa-eye-slash eye_slash"
                    onClick={showPasswordFun}
                  ></i>
                ) : (
                  <i
                    className="fa-solid fa-eye eye_slash"
                    onClick={showPasswordFun}
                  ></i>
                )}
              </div>
              <button
                type="submit"
                className="login_btn btn_style guestLogin"
                onClick={guestLoginHandler}
              >
                Enter Guest credentials
              </button>
              <button type="submit" className="login_btn btn_style">
                Login
              </button>
              <p className="new_account_link font_small">
                Not a user yet ?
                <Link to="/signup" className="alert_primary">
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
