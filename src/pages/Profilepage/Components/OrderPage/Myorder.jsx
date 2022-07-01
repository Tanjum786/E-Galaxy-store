import React from "react";
import {  useProducts } from "../../../../Context";
import "./orderpage.css";

export const Myorder = () => {
  const {productState}=useProducts()
  const {orders}=productState
  
  console.log(orders);
  return (
    <>
      {orders.length ? (
        orders.map((order) => (
          <section>
            <div className="order-container">
              <h1 className="order-title">Order Confirmed</h1>
              <p className="order-date order-padding text-gray">
                {order.newDate}
              </p>
              <p className="order-Id order-padding">Order Id: #{order._id}</p>
              {order.orderProducts.map((product) => (
                <>
                  <div className="order-product-detail">
                    <img
                      className="order-product-img"
                      alt="order-product"
                      src={product.img}
                    />
                    <div className="detail-info">
                      <h3 className="order-padding text-gray">
                        {product.title}
                      </h3>

                      <p className="order-padding">
                        Qty:{product.Quantity}
                      </p>
                      <p className="order-padding">
                        Price: {product.price}
                      </p>
                    </div>
                  </div>
                </>
              ))}
              <div className="order-price-maincontainer">
                <h1>Price Details:</h1>
                <div className="order-price-container">
                  <div>
                    <p className="order-qty order-padding">Total price</p>
                    <p className="order-qty order-padding">Amount Paid</p>
                  </div>
                  <div>
                    <p className="order-qty order-padding">
                      {order.TotalPrice}
                    </p>
                    <p className="order-qty order-padding">
                      {order.TotalPrice}
                    </p>
                  </div>
                </div>
              </div>
              <div className="order-address-container">
                <h2>Dilevery Address</h2>
                <h1 className="text-gray">{order.dileveryAddress.name}</h1>
                <p className="order-padding">
                  {order.dileveryAddress.street},{order.dileveryAddress.city}
                </p>
                <p className="order-padding">
                  {order.dileveryAddress.state}, {order.dileveryAddress.country}{" "}
                  - {order.dileveryAddress.zipCode}
                </p>
                <p className="order-padding">
                  Mobile - {order.dileveryAddress.mobile}
                </p>
              </div>
            </div>
          </section>
        ))
      ) : (
        <h1 className="empty-message">You haven't shopped anything yet!!</h1>
      )}
    </>
  );
};
