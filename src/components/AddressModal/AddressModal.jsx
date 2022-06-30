import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { editAddressApi } from "../../Apicalls";
import { addnewAddress } from "../../Apicalls/AddressManagement/addNewAddress";
import { useAuth } from "../../Context";
import { Toast } from "../Toast";
import "./address.css";

export const AddressModal = ({
  showAddressModal,
  setAddressModal,
  editAddress,
  setEditAddress,
}) => {
  const [address, setaddress] = useState({
    name: "",
    street: "",
    state: "",
    city: "",
    mobile: "",
    zipCode: "",
    country: "",
  });
  const { userDetailes, Authdispatch } = useAuth();
  const { token } = userDetailes;
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setaddress({ ...address, [name]: value });
  };
  const navigate = useNavigate();
  const checkInputs = () => {
    return (
      address.name &&
      address.city &&
      address.country &&
      address.mobile &&
      address.zipCode
    );
  };
  const callAddressApi = () => {
    if (checkInputs) {
      if (token) {
        if (editAddress) {
          editAddressApi(address, token, Authdispatch);
          setEditAddress(null);
        } else {
          addnewAddress(address, token, Authdispatch);
        }
        setAddressModal(false);
      } else {
        navigate("/login");
        Toast("you have to login first", "info");
      }
    }
  };

  const checkEditAddress = () => {
    if (editAddress) {
      setaddress(editAddress);
    }
  };

  useEffect(() => checkEditAddress(), []);

  return (
    <>
      {showAddressModal ? (
        <section>
          <div className="modal-container">
            <div className="address-modal">
              <div className="form-container">
                <h1 className="form-heading">Add New Address</h1>
                <form>
                  <input
                    type="text"
                    value={address.name}
                    onChange={changeHandler}
                    placeholder="Enter your first Name"
                    name="name"
                  />
                  <input
                    type="text"
                    value={address.street}
                    onChange={changeHandler}
                    placeholder="Enter your street Name"
                    name="street"
                  />
                  <input
                    type="text"
                    value={address.state}
                    onChange={changeHandler}
                    placeholder="Enter your state Name"
                    name="state"
                  />
                  <input
                    type="text"
                    placeholder="Enter your city Name"
                    value={address.city}
                    onChange={changeHandler}
                    name="city"
                  />
                  <input
                    type="number"
                    placeholder="Enter your phone Number"
                    name="mobile"
                    value={address.mobile}
                    onChange={changeHandler}
                  />
                  <input
                    type="number"
                    placeholder="Enter your zipCode Number"
                    name="zipCode"
                    value={address.zipCode}
                    onChange={changeHandler}
                  />
                  <input
                    type="text"
                    placeholder="Enter your country Name"
                    value={address.country}
                    onChange={changeHandler}
                    name="country"
                  />
                </form>
                <div className="modal-btn-container">
                  <button
                    className="login_btn  edit-btn"
                    onClick={callAddressApi}
                  >
                    {editAddress ? "Update" : "Save"}
                  </button>
                  <button
                    className="login_btn  remove-btn"
                    onClick={() => setAddressModal(false)}
                  >
                    Cancle
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};
