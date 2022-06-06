import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Navbar, Toast } from "../../components";
import { useAuth, useloginsignup } from "../../Context";
import "./Authentication.css";

export const Signup = () => {
  const { showPassword, showPasswordFun } = useloginsignup();
  const { SignUp, authState, Authdispatch } = useAuth();
  const { email, firstName, lastName, password, confirPassword, isSubmit } =
    authState;

  const SignupHandler = (e) => {
    e.preventDefault();
    Authdispatch({ type: "SUBMIT" });
  };

  const checkUserDetailes = () => {
    return (
      email !== "" &&
      password !== "" &&
      lastName !== "" &&
      firstName !== "" &&
      confirPassword
    );
  };

  const checkPassword = () => {
    if (password === confirPassword) {
      return true;
    } else {
      Toast("password enter is not match");
      return false;
    }
  };

  useEffect(() => {
    SignUp(
      email,
      password,
      lastName,
      firstName,
      confirPassword,
      checkPassword,
      checkUserDetailes
    );
  }, [isSubmit]);

  return (
    <>
      <div className="e_container">
        <Navbar />
        <section className="e_login_signup_container dis_flex">
          <form>
            <div className="login_signup_container signup_container gap_s dis_flex">
              <h1 className="login_signup_name">Sign Up</h1>
              <label htmlFor="firstname">
                First Name<small class="star_color font_small">*</small>
              </label>
              <input
                type="text"
                name="firstName"
                className="input_filed padding_small"
                placeholder="Enter you first name"
                id="firstname"
                value={firstName}
                onChange={(e) =>
                  Authdispatch({
                    type: "USER_DETAILS",
                    payload: e.target.value,
                    name: e.target.name,
                  })
                }
                required
              />
              <label htmlFor="lastname">
                Last Name<small className="star_color font_small">*</small>
              </label>
              <input
                type="text"
                name="lastName"
                className="input_filed padding_small"
                placeholder="Enter your Last name"
                value={lastName}
                onChange={(e) =>
                  Authdispatch({
                    type: "USER_DETAILS",
                    payload: e.target.value,
                    name: e.target.name,
                  })
                }
                required
              />
              <label htmlFor="Email">
                Email<small className="star_color font_small">*</small>
              </label>
              <input
                type="email"
                name="email"
                className="input_filed padding_small"
                placeholder="demo@demo.com"
                value={email}
                onChange={(e) =>
                  Authdispatch({
                    type: "USER_DETAILS",
                    payload: e.target.value,
                    name: e.target.name,
                  })
                }
              />
              <label htmlFor="password_signup">
                Password<small className="star_color font_small">*</small>
              </label>
              <input
                type="text"
                name="password"
                className="input_filed padding_small"
                placeholder="Enter your password"
                value={password}
                onChange={(e) =>
                  Authdispatch({
                    type: "USER_DETAILS",
                    payload: e.target.value,
                    name: e.target.name,
                  })
                }
                required
              />
              <label htmlFor="Confirm_pass">
                Confirm password
                <small className="star_color font_small">*</small>
              </label>
              <div className="showpassword_container">
                <input
                  type={showPassword}
                  name="confirPassword"
                  className="input_filed padding_small password_filed"
                  placeholder="Enter your Password again"
                  value={confirPassword}
                  onChange={(e) =>
                    Authdispatch({
                      type: "USER_DETAILS",
                      payload: e.target.value,
                      name: e.target.name,
                    })
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
                className="login_btn  btn_style"
                onClick={(e) => SignupHandler(e)}
              >
                Register
              </button>
              <p className="new_account_link font_small">
                Already have account?
                <Link to="/login" className="alert_primary">
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
