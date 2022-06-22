import React from "react";
import { useState } from "react";
import { Navbar } from "../../components";
import { Filters } from "./component/Filters";
import { Products } from "./component/Products";
import "./productpage.css";

export const Productlisting = () => {
  const [searchQurey, setSerachQurey] = useState("");

  return (
    <>
      <div>
        <Navbar searchQurey={searchQurey} setSerachQurey={setSerachQurey} />
        <section className="product_container dis_flex">
          <Filters />
          <Products searchQurey={searchQurey}/>
        </section>
      </div>
    </>
  );
};
