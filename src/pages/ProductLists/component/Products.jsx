import React, { useState, useEffect } from "react";
import axios from "axios";
import { Categoryfun, RangeFun, RatingFun, SortpriceFun } from "../../../utils";
import { imgWarning } from "../../../assets/images";
import { Link } from "react-router-dom";
import { Toast } from "../../../components/Toast";
import { useFilter, useProducts } from "../../../Context";

export const Products = () => {
  const { filterState } = useFilter();
  const { productState, productDispatch } = useProducts();
  const [res, setRes] = useState([]);
  const [loading, setloding] = useState("");

  const { cart } = productState;

  const dataFetch = async () => {
    setloding("Loading.....");
    const response = await axios.get("/api/products");
    setRes(response.data.products);
    setloding("");
  };
  useEffect(dataFetch, []);

  const SortProduct = SortpriceFun(res, filterState);
  const RatingProduct = RatingFun(SortProduct, filterState);
  const RangeProduct = RangeFun(RatingProduct, filterState);
  const CategoryProduct = Categoryfun(RangeProduct, filterState);
  return (
    <>
      <div className="product_card_list">
        <h1 className="products_titel">
          Showing All Products ({CategoryProduct.length})
        </h1>
        <div className="title_underline"> </div>
        {filterState.PriceValue <= 50 ? (
          <div className="dis_flex">
            <img src={imgWarning} alt="warningImg" className="imgwarning" />
          </div>
        ) : (
          ""
        )}
        <h1>{loading}</h1>
        <div className="all_cards_container dis_flex">
          {CategoryProduct.map(
            ({ img, rating, title, price, _id, Quantity }) => {
              const isaddedTocart = cart.some((item) => item._id === _id);

              return (
                <div className="product_card bg_color" key={_id}>
                  <div className="product_card_img">
                    <div className="product_wishlist_icon dis_flex">
                      <button
                        className="wishlist_btn"
                        onClick={() => {
                          Toast(
                            `Successfuly added ${title} to the wishlist`,
                            "success"
                          );
                          productDispatch({
                            type: "ADD_TO_WISHLIST",
                            payload: {
                              img: img,
                              title: title,
                              price: price,
                              _id: _id,
                              rating: rating,
                              Quantity: Quantity,
                            },
                          });
                        }}
                      >
                        {productState.wishList.find(
                          (item) => item._id === _id
                        ) ? (
                          <i className="fa fa-heart color-btn"></i>
                        ) : (
                          <i className="fa fa-heart-o color-btn"></i>
                        )}
                      </button>
                    </div>
                    <img src={img} alt="product-image" className="img_size" />
                  </div>
                  <div className="rating_container">
                    <span className="rating">
                      <i className="fas fa-star icon_star"></i> {rating}
                    </span>
                  </div>
                  <div className="product_card_details gap_s dis_flex">
                    <span>{title}</span>
                    <h3>₹ {price}</h3>
                  </div>
                  <div>
                    {isaddedTocart ? (
                      <Link to="/cart">
                        <button className="add_to_cart bg_color padding_small">
                          Go To Cart
                        </button>
                      </Link>
                    ) : (
                      <button
                        onClick={() => {
                          Toast(
                            `Successfuly added ${title} to the cart`,
                            "success"
                          );

                          productDispatch({
                            type: "ADD_TO_CART",
                            payload: {
                              img: img,
                              title: title,
                              price: price,
                              _id: _id,
                              rating: rating,
                              Quantity: Quantity,
                            },
                          });
                        }}
                        className="add_to_cart bg_color padding_small"
                      >
                        Add To Cart
                      </button>
                    )}
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </>
  );
};
