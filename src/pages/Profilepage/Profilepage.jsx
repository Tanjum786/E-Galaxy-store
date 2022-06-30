import React, { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { AddressModal, Navbar } from "../../components";
import { UserProfile } from "./Components";
import "./profilepage.css";

export const Profilepage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showAddressModal, setAddressModal] = useState(false);
  const [editAddress,setEditAddress]=useState(null)

  return (
    <>
      {showAddressModal ? (
        <AddressModal
          showAddressModal={showAddressModal}
          setAddressModal={setAddressModal}
          setEditAddress={setEditAddress}
          editAddress={editAddress}
        />
      ) : null}
      <Navbar />
      <main className="profile-container">
        <h1 className="profile-page-title">Account</h1>
        <section className="profile-page">
          <div className="profilepage-tab dis_flex">
            <button
              className={`profile-btn ${
                location.pathname === "/profilepage" ? "tab-activ" : ""
              }`}
              onClick={() => navigate("/profilepage")}
            >
              Profile
            </button>
            <button
              className={`profile-btn ${
                location.pathname === "/profilepage/address" ? "tab-active" : ""
              }`}
              onClick={() => navigate("address")}
            >
              Address
            </button>
            <button
              className={`profile-btn ${
                location.pathname === "/profilepage/myorder" ? "tab-active" : ""
              }`}
              onClick={() => navigate("myorder")}
            >
              My Order
            </button>
          </div>
          {location.pathname === "/profilepage" ? <UserProfile /> : null}
          <Outlet />
        </section>
      </main>
    </>
  );
};
