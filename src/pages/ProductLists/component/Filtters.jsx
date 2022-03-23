import React from "react";

export const Filtters = () => {
  return (
    <>
      <div class="fillter_container bg_color font_small dis_flex">
        <ul class="product_lists">
          <li>
            <div class="product_title dis_flex">
              <h1>Filtter</h1>
              <button class="clear_btn font_small">
                Clear
              </button>
            </div>
          </li>
          <li>
            <div class="price_range dis_flex">
              <h2>Price</h2>
              <div class="price_list dis_flex">
                <p class="prices font_small">500</p>
                <p class="prices font_small">1500</p>
                <p class="prices font_small">2000</p>
              </div>
              <input type="range" max="10"/>
            </div>
          </li>
          <li>
            <h2>Category</h2>
            <div class="containt_list gap_s dis_flex">
              <div>
                <label for="mens_cloth">
                  <input type="checkbox" id="mens_cloth" name="cloths" /> Men's
                  cloth
                </label>
              </div>
              <div>
                <label for="kids_cloth">
                  <input type="checkbox" id="kids_cloth" name="cloths" /> Kid's
                  cloth
                </label>
              </div>
              <div>
                <label for="womens_cloth">
                  <input type="checkbox" id="womens_cloth" name="cloths" />
                  women's cloth
                </label>
              </div>
            </div>
          </li>
          <li>
            <h2>Rating</h2>
            <div class="containt_list gap_s dis_flex">
              <div>
                <label for="4stars">
                  <input type="radio" id="4stars" name="radio_rating" /> 4 stars
                  & above
                </label>
              </div>
              <div>
                <label for="3stars">
                  <input type="radio" id="3stars" name="radio_rating" /> 3 stars
                  & above
                </label>
              </div>
              <div>
                <label for="2strs">
                  <input type="radio" id="2strs" name="radio_rating" /> 2 stars
                  & above
                </label>
              </div>
              <div>
                <label for="1strs">
                  <input type="radio" id="1strs" name="radio_rating" /> 1 stars
                  & above
                </label>
              </div>
            </div>
          </li>
          <li>
            <h2>Sort By</h2>
            <div class="containt_list gap_s dis_flex">
              <div>
                <label for="LowtoHigh">
                  <input type="radio" id="LowtoHigh" name="sort-price" /> Price-
                  Low to High
                </label>
              </div>
              <div>
                <label for="HightoLow">
                  <input type="radio" id="HightoLow" name="sort-price" />
                  Price-High to Low
                </label>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
