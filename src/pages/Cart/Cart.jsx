import React from "react";
import "./cart.css";
import { Navbar } from "../../components";
import { Cardcart } from "./component/Cardcart";
import { image7 } from "../../assets/images";
import { Cartbill } from "./component/Cartbill";

export const Cart = () => {
  return (
    <div>
      <Navbar auth={"Login"} linkto={"/login"} />
      <div>
        <h1 className="headline">My Cart</h1>
        <div className="title_underline"></div>
      </div>
      <section className="cart_container dis_flex">
        <Cartbill
          price={250}
          DiscAmt={250}
          DeliveryAmt={0}
          SaveAmt={250}
          TotalAmt={250}
          cartitem={1}
        />
        <Cardcart
          cardtitle={"SOM2SOM Women Solid Straight Kurta"}
          cartimg={image7}
          cartprice={"Rs.250"}
          cutprice={"Rs.500"}
          discount={"50%"}
          Quantity={"Quantity :"}
        />
      </section>
    </div>
  );
};
