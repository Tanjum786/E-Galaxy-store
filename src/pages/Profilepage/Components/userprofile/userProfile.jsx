import React from "react";
import {  useNavigate } from "react-router-dom";
import { Toast } from "../../../../components";
import { useAuth } from "../../../../Context";
import "./userprofile.css";

export const UserProfile = () => {
  const navigate=useNavigate()
  const {
    Authdispatch,
    userDetailes: { user },
  } = useAuth();
  const logoutHandler = () => {
    localStorage.removeItem("users");
    localStorage.removeItem("token");
    navigate("/")
    Authdispatch({ type: "LOGOUT" });
    Toast(`Successfuly logedout`, "success");
  };
  return (
    <>
      <div className="user-page">
        <h1>Profile detailes</h1>
        <p className="user-title"><strong>Name</strong>  {user.firstName} {user.lastName}</p>
        <p className="user-title"><strong>Email</strong> {user.email}</p>
      </div>
      <div className="user-page">
        <h1>Account setting </h1>
        {
          <button className="login_btn logout_btn" onClick={logoutHandler}>
            Logout
          </button>
        }
      </div>
    </>
  );
};
