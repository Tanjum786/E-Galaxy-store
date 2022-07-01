import React from "react";
import { useNavigate } from "react-router-dom";
import { addNeworder, removefromCart } from "../../../../Apicalls";
import { Toast } from "../../../../components";
import { useAuth, useProducts } from "../../../../Context";
import "./checkout.css";

export const Checkoutbill = ({ TotalPrice, selectAddress }) => {
  const { productState, productDispatch } = useProducts();
  const { cart } = productState;
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("users");
  const users = JSON.parse(user);
  const navigate = useNavigate();

  const paymentIntigration = () => {
    selectAddress ? proceedToPay() : Toast("Please select address", "error");
  };

  const getOrderobj = () => {
    const weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const today = new Date();
    const newDate =
      weekday[today.getDay()] +
      " " +
      today.getDate() +
      " " +
      month[today.getMonth()] +
      " " +
      today.getFullYear();

    const order = {
      orderProducts: cart,
      dileveryAddress: selectAddress,
      TotalPrice: TotalPrice,
      newDate: newDate,
    };
    return order;
  };

  const proceedToPay = async () => {
    var options = {
      key: "rzp_test_OIuRnvvEFGFpak",
      amount: TotalPrice * 100,
      currency: "INR",
      name: "E-Galaxy-Store",
      description: "Thank you for shopping with us",
      image:
        "https://raw.githubusercontent.com/Tanjum786/E-Galaxy-store/dev/public/fevicon.ico",
      prefill: {
        name: users.firstName,
        email: users.email,
        contact: selectAddress.mobile,
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#1e40af",
      },
      handler: function () {
        const order = getOrderobj();
        addNeworder(order, productDispatch, token);
        cart.map((item) => removefromCart(item._id, token, productDispatch));
        navigate("/profilepage/myorder");
        Toast("congratulations order placed successfully", "success");
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
    rzp1.on("payment failed", function () {
      Toast("something went wrong", "error", response);
    });
  };
  return (
    <>
      <section className="billing-container">
        <div>
          <h1 className="order-title">Order Details</h1>
          <div>
            <h1 className="purchase-title">Purchase Item</h1>
            <div className="itemTitle-container">
              <p className="padding-par">Item</p>
              <p className="padding-par">Price</p>
            </div>
            <div>
              {cart.map((item) => (
                <div key={item._id} className="prices-container">
                  <div>
                    <p className="padding-par">{item.title}</p>
                    <span>
                      ({item.Quantity} x ₹{item.price})
                    </span>
                  </div>
                  <p className="padding-par">₹{item.Quantity * item.price}</p>
                </div>
              ))}
            </div>
            <div>
              <h1 className="purchase-title">Price Details</h1>
              <div className="checkout-billing-container">
                <div>
                  <p className="padding-par">Total price</p>
                  <p className="padding-par">Delivery</p>
                  <h1 className="total-amt-title padding-par">Total Amount</h1>
                </div>
                <div>
                  <p className="padding-par">₹ {TotalPrice}</p>
                  <p className="padding-par">Free</p>
                  <h1 className="total-amt-title padding-par">
                    ₹ {TotalPrice}
                  </h1>
                </div>
              </div>
            </div>
          </div>
          {selectAddress ? (
            <div>
              <h1 className="purchase-title">Delivery Address</h1>
              <h3>{selectAddress.name}</h3>
              <p className="padding-parAdd">
                {selectAddress.street} {selectAddress.city}
              </p>
              <p className="padding-parAdd">
                {selectAddress.state} {selectAddress.country}
              </p>
              <p className="padding-parAdd">{selectAddress.zipCode}</p>
              <p className="padding-parAdd">Phone.No {selectAddress.mobile}</p>
            </div>
          ) : null}
          <button className="place_order" onClick={paymentIntigration}>
            CheckOut
          </button>
        </div>
      </section>
    </>
  );
};
