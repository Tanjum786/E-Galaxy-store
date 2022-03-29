import React from "react";
import { Navbar } from "../../components";
import { Filtters } from "./component/Filtters";
import { Products } from "./component/Products";
import "./productpage.css";

export const Productlisting = () => {
  return (
    <>
      <div>
        <Navbar auth={"Login"} linkto={"/login"} />
        <section className="product_container dis_flex">
          <Filtters />
          <Products />
        </section>
      </div>
    </>
  );
};
