import React from "react";
import { useNavigate } from "react-router-dom";
import { removefromCart } from "../../../../Apicalls";
import { Toast } from "../../../../components";
import { useProducts } from "../../../../Context";
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

  const proceedToPay = async () => {
    const response = await loadSDK();
    if (response) {
      var options = {
        key: "rzp_test_OIuRnvvEFGFpak",
        key_id: "rzp_test_OIuRnvvEFGFpak",
        key_secret: "IQ3YnNp98AesxpK5F3BYK9nu",
        amount: TotalPrice*100,
        currency: "INR",
        name: "e-Galaxy-store",
        description: "Thank you for shopping with us",
        image: "https://example.com/your_logo",
        order_id: "order_JnaoTKXrIOdXHi",
        callback_url: "https://eneqd3r9zrjok.x.pipedream.net/",
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
        handler: function (response) {
          console.log(response,'order')
          cart.map((item) => removefromCart(item._id, token, productDispatch));
          navigate("/profilepage/myorder");
          Toast("congratulations order placed successfully", "success");
        },
      };
      const rzp1 = new window.Razorpay(options);
      rzp1.open();
      rzp1.on("payment failed", function (response) {
        Toast("something went wrong", "error", response);
      });
    } else {
      Toast("something went wrong", "error");
    }
  };

  const loadSDK = async () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
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
