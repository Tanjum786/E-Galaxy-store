import React from "react";
import { useFilter } from "../../../Context";

export const Filters = () => {
  const { filterState, filterDispatch } = useFilter();
  const {
    CategoryKids,
    CategoryMen,
    CategoryWomen,
    PriceValue,
    Rating,
    sortby,
  } = filterState;
  return (
    <>
      <div className="fillter_container bg_color font_small dis_flex">
        <ul className="product_lists filter-section">
          <li>
            <div className="product_title dis_flex">
              <h1 className="filters_title">Filters</h1>
              <button
                className="clear_btn font_small"
                onClick={() => filterDispatch({ type: "RESET", payload: "" })}
              >
                Clear All
              </button>
            </div>
          </li>
          <div>
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
                <div className="label-container dis_flex">
                  <input
                    type="checkbox"
                    id="mens_cloth"
                    name="cloths"
                    checked={CategoryMen}
                    onChange={(e) =>
                      filterDispatch({
                        type: "MEN",
                        payload: e.target.checked,
                      })
                    }
                  />
                  <label htmlFor="mens_cloth">Men's cloth</label>
                </div>
                <div className="label-container dis_flex">
                  <input
                    type="checkbox"
                    id="kids_cloth"
                    name="cloths"
                    checked={CategoryKids}
                    onChange={(e) =>
                      filterDispatch({
                        type: "KIDS",
                        payload: e.target.checked,
                      })
                    }
                  />
                  <label htmlFor="kids_cloth">Kid's cloth</label>
                </div>
                <div className="label-container dis_flex">
                  <input
                    type="checkbox"
                    id="womens_cloth"
                    name="cloths"
                    checked={CategoryWomen}
                    onChange={(e) =>
                      filterDispatch({
                        type: "WOMEN",
                        payload: e.target.checked,
                      })
                    }
                  />
                  <label htmlFor="womens_cloth">Women's cloth</label>
                </div>
              </div>
            </li>
            <li className="list_container">
              <h2>Rating</h2>
              <div className="containt_list gap_s dis_flex">
                <div className="label-container dis_flex">
                  <input
                    type="radio"
                    id="4stars"
                    name="radio_rating"
                    checked={Rating === "Four"}
                    onChange={() => filterDispatch({ type: "Four" })}
                  />
                  <label htmlFor="4stars">4 stars & above</label>
                </div>
                <div className="label-container dis_flex">
                  <input
                    type="radio"
                    id="3stars"
                    name="radio_rating"
                    checked={Rating === "Three"}
                    onChange={() => filterDispatch({ type: "Three" })}
                  />
                  <label htmlFor="3stars">3 stars & above</label>
                </div>
                <div className="label-container dis_flex">
                  <input
                    type="radio"
                    id="2strs"
                    name="radio_rating"
                    checked={Rating === "Two"}
                    onChange={() => filterDispatch({ type: "Two" })}
                  />
                  <label htmlFor="2strs">2 stars & above</label>
                </div>
                <div className="label-container dis_flex">
                  <input
                    type="radio"
                    id="1strs"
                    name="radio_rating"
                    checked={Rating === "One"}
                    onChange={() => filterDispatch({ type: "One" })}
                  />
                  <label htmlFor="1strs">1 stars & above</label>
                </div>
              </div>
            </li>
            <li className="list_container">
              <h2>Sort By</h2>
              <div className="containt_list gap_s dis_flex">
                <div className="label-container dis_flex">
                  <input
                    type="radio"
                    id="HightoLow"
                    name="sort-price"
                    checked={sortby === "HIGH-TO-LOW"}
                    onChange={() => filterDispatch({ type: "HIGH-TO-LOW" })}
                  />
                  <label htmlFor="HightoLow">Price-High-to-Low</label>
                </div>
                <div className="label-container dis_flex">
                  <input
                    type="radio"
                    id="LowtoHigh"
                    name="sort-price"
                    checked={sortby === "LOW-TO-HIGH"}
                    onChange={() => filterDispatch({ type: "LOW-TO-HIGH" })}
                  />
                  <label htmlFor="LowtoHigh">Price-Low-to-High</label>
                </div>
              </div>
            </li>
          </div>
        </ul>
      </div>
    </>
  );
};
