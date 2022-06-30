import React from "react";
import "./addessSelect.css";
import { BsPlusLg } from "react-icons/bs";

export const AddessSelect = ({
  addresses,
  setSelectAddress,
  setAddressModal,
}) => {
   

  return (
    <>
      <section className="selectaddress-container">
        {addresses.map((item) => (
          <div className="selectaddress">
            <input
              type="radio"
              id={item._id}
              name="address"

              onClick={() => setSelectAddress(item)}
            />
            <label htmlFor={item._id}>
            <div className="detail-selectedAddress">

              <h1 className="detaile-selectaddress">{item.name}</h1>
              <p className="detaile-selectaddress">
                {item.street} {item.city}  {item.state}  {item.country}                                                                                               {item.zipCode}
              </p>
              <p className="detaile-selectaddress">phone.No: {item.mobile}</p>
            </div>
            </label>
          </div>
        ))}
      <div className="Addaddress-btn"> 
        <button className="plus-icon-btn" onClick={()=>setAddressModal(true)}>
              Add Address
              <BsPlusLg className="plus-icon" />
            </button>
      </div>
      </section>
    </>
  );
};
