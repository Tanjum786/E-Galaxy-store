import React from "react";
import { Navbar } from "../../components";
import { Filters } from "./component/Filters";
import { Products } from "./component/Products";
import "./productpage.css";

export const Productlisting = () => {
  return (
    <>
      <div>
        <Navbar auth={"Login"} linkto={"/login"} />
        <section className="product_container dis_flex">
          <Filters />
          <Products />
        </section>
      </div>
    </>
  );
};
