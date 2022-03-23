import React from "react";
import "./cart.css";
import { Footer, Navbar } from "../../components";
import { Cardcart } from "./component/Cardcart";
import { image7 } from "../../assets/images";
import { Cartbill } from "./component/Cartbill";

export const Cart = () => {
  return (
    <div className="e_container">
      <Navbar auth={"Login"} />
      <div>
        <h1 className="headline">My Cart</h1>
        <div className="title_underline"></div>
      </div>
      <section className="cart_container dis_flex">
<<<<<<< Updated upstream
=======
        <Cartbill
          price={250}
          DiscAmt={250}
          DeliveryAmt={0}
          SaveAmt={250}
          TotalAmt={250}
          cartitem={1}
        />
>>>>>>> Stashed changes
        <Cardcart
          cardtitle={"SOM2SOM Women Solid Straight Kurta"}
          cartimg={image7}
          cartprice={250}
          cutprice={500}
          discount={"50%"}
          Quantity={"Quantity :"}
        />
        <Cartbill
          price={"₹250"}
          DiscAmt={"₹250"}
          DeliveryAmt={"₹0"}
          SaveAmt={"₹250"}
          TotalAmt={"₹250"}
          cartitem={"1"}
        />
      </section>
      <Footer />
    </div>
  );
};
