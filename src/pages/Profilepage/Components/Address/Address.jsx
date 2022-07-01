import React, { useEffect } from "react";
import { BsPlusLg } from "react-icons/bs";
import { removeAddress } from "../../../../Apicalls/AddressManagement/removeAddress";
import { useAuth, useProducts } from "../../../../Context";
import "./address.css";

export const Address = ({ setAddressModal, setEditAddress }) => {
  const { userDetailes} = useAuth();
  const { token } = userDetailes;
  const {productState,productDispatch}=useProducts()
  const {addresses}=productState
  
  const updateAddress = (address) => {
    setEditAddress(address);
    setAddressModal(true);
  };

  const addressHandler = () => {
    setEditAddress(null);
    setAddressModal(true);
  };

  return (
    <>
      <div className="address-container">
        {addresses? (
          <div>
            <div className="address-detailes">
              {addresses?.map((item) => {
                return (
                  <div className="detailes">
                    <h1>{item.name}</h1>
                    <p className="address-detail">House No {item.street}</p>
                    <p className="address-detail">
                      {item.city},{item.state}, {item.zipCode}
                    </p>
                    <p className="address-detail">{item.country}</p>
                    <p className="address-detail">Mobile No.: {item.mobile}</p>
                    <div className="btns">
                      <button
                        className="login_btn  edit-btn"
                        onClick={() => updateAddress(item)}
                      >
                        Edit
                      </button>
                      <button
                        className="login_btn remove-btn"
                        onClick={() =>
                          removeAddress(item._id, token, productDispatch)
                        }
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
            <button className="plus-icon-btn" onClick={addressHandler}>
              Add Address
              <BsPlusLg className="plus-icon" />
            </button>
          </div>
        ) : null}
      </div>
    </>
  );
};
