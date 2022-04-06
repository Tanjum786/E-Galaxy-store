import React from "react";
import { useFilter } from "../../../hooks/context/filterProvider";

export const Filters = () => {
  const { filterState, filterDispatch } = useFilter();
  const { CatagoryKids, CatagoryMen, CatagoryWomen, PriceValue,Rating,sortby} = filterState;
  return (
    <>
      <div className="fillter_container bg_color font_small dis_flex">
        
          <ul className="product_lists">
            <li>
              <div className="product_title dis_flex">
                <h1 className="products_titel">Filters</h1>
                <button
                  className="clear_btn font_small"
                  onClick={() => filterDispatch({ type: "RESET", payload: "" })}
                >
                  Clear All
                </button>
              </div>
            </li>
            <li className="list_container">
              <div className="price_range dis_flex">
                <h2>Price</h2>
                <div className="price_div dis_flex">
                  <span>(₹ 0 - ₹ {PriceValue} )</span>
                </div>
                <input
                  type="range"
                  max="3000"
                  step="500"
                  min="0"
                  value={PriceValue}
                  checked={PriceValue}
                  onChange={(e) =>
                    filterDispatch({ type: "RANGE", payload: e.target.value })
                  }
                />
              </div>
            </li>
            <li className="list_container">
              <h2>Category</h2>
              <div className="containt_list gap_s dis_flex">
                <div>
                  <label htmlFor="mens_cloth">
                    <input
                      type="checkbox"
                      id="mens_cloth"
                      name="cloths"
                      checked={CatagoryMen}
                      onChange={(e) =>
                        filterDispatch({
                          type: "MEN",
                          payload: e.target.checked,
                        })
                      }
                    /> Men's cloth
                  </label>
                </div>
                <div>
                  <label htmlFor="kids_cloth">
                    <input
                      type="checkbox"
                      id="kids_cloth"
                      name="cloths"
                      checked={CatagoryKids}
                      onChange={(e) =>
                        filterDispatch({
                          type: "KIDS",
                          payload: e.target.checked,
                        })
                      }
                    /> Kid's cloth
                  </label>
                </div>
                <div>
                  <label htmlFor="womens_cloth">
                    <input
                      type="checkbox"
                      id="womens_cloth"
                      name="cloths"
                      checked={CatagoryWomen}
                      onChange={(e) =>
                        filterDispatch({
                          type: "WOMEN",
                          payload: e.target.checked,
                        })
                      }
                    /> Women's cloth
                  </label>
                </div>
              </div>
            </li>
            <li className="list_container">
              <h2>Rating</h2>
              <div className="containt_list gap_s dis_flex">
                <div>
                  <label htmlFor="4stars">
                    <input
                      type="radio"
                      id="4stars"
                      name="radio_rating"
                      checked={Rating==="Four"}
                      onChange={() => filterDispatch({ type: "Four" })}
                    /> 4 stars & above
                  </label>
                </div>
                <div>
                  <label htmlFor="3stars">
                    <input
                      type="radio"
                      id="3stars"
                      name="radio_rating"
                      checked={Rating==="Three"}
                      onChange={() => filterDispatch({ type: "Three" })}
                    /> 3 stars & above
                  </label>
                </div>
                <div>
                  <label htmlFor="2strs">
                    <input
                      type="radio"
                      id="2strs"
                      name="radio_rating"
                      checked={Rating==="Two"}
                      onChange={() => filterDispatch({ type: "Two" })}
                    /> 2 stars & above
                  </label>
                </div>
                <div>
                  <label htmlFor="1strs">
                    <input
                      type="radio"
                      id="1strs"
                      name="radio_rating"
                      checked={Rating==="One"}
                      onChange={() => filterDispatch({ type: "One" })}
                    /> 1 stars & above
                  </label>
                </div>
              </div>
            </li>
            <li className="list_container">
              <h2>Sort By</h2>
              <div className="containt_list gap_s dis_flex">
                <div>
                  <label htmlFor="HightoLow">
                    <input
                      type="radio"
                      id="HightoLow"
                      name="sort-price"
                      checked={sortby==="HIGH-TO-LOW"}
                      onChange={() => filterDispatch({ type: "HIGH-TO-LOW" })}
                    /> Price-High-to-Low
                  </label>
                </div>
                <div>
                  <label htmlFor="LowtoHigh">
                    <input
                      type="radio"
                      id="LowtoHigh"
                      name="sort-price"
                      checked={sortby==="LOW-TO-HIGH"}
                      onChange={() => filterDispatch({ type: "LOW-TO-HIGH" })}
                    /> Price-Low-to-High
                  </label>
                </div>
              </div>
            </li>
          </ul>
      </div>
    </>
  );
};
