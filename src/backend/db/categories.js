import { v4 as uuid } from "uuid";
import {image5, image6, image7 } from "../../assets/images";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Men's wear",
    img:image6

  },
  {
    _id: uuid(),
    categoryName: "Kid's wear",
    img: image5
  },
  {
    _id: uuid(),
    categoryName: "Women's wear",
    img:image7
  }
];
