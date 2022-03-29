import axios from "axios";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Productcategory = () => {
  const [dataCat, setdataCata] = useState([]);
  const cataDatafetch = async () => {
    const response = await axios.get("/api/categories");
    setdataCata(response.data.categories);
  };
  useEffect(cataDatafetch, []);
  
  return (
    <>
      {dataCat.map(({ img, categoryName }) => {
        return (
          <div className="card_container">
            <Link to="/product">
              <img src={img} alt="img" />
              <p className="card_overlay padding_small">{categoryName}</p>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export { Productcategory };
