import React,{useState,useEffect} from "react";
import axios from "axios";
export const Products = () => {
  const [res, setRes] = useState([]);
  const dataFetch = async () => {
    const response = await axios.get("/api/products");
    setRes(response.data.products);
  };
  useEffect(dataFetch, []);
  return (
    <>
      <div className="product_card_list">
        <h1 className="headline">All Products</h1>
        <div className="all_cards_container dis_flex">
          {res.map(({img,rating,title,price}) => {
            return (
              <div className="product_card bg_color">
                <div className="product_card_img">
                  <div className="product_wishlist_icon dis_flex">
                    <a href="/">
                      <i className="fa fa-heart-o"></i>
                    </a>
                  </div>
                  <img src={img} alt="image" />
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
                  <button className="add_to_cart bg_color padding_small">
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
