import { v4 as uuid } from "uuid";
import {
  image4,
  image5,
  productimg1,
  productimg2,
  productimg4,
} from "../../assets/images";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Western Wear For Women",
    img: productimg1,
    price: 1000,
    rating: "3.9",
    categoryName: "women's wear",
  },
  {
    _id: uuid(),
    title: "Kid's Festive & party ware",
    img: image5,
    price: 3000,
    rating: "3",
    categoryName: "horror",
  },
  {
    _id: uuid(),
    title: "Kid's Festive & party ware",
    img: productimg2,
    rating: "3",
    price: 3000,
    categoryName: "horror",
  },
  {
    _id: uuid(),
    title: "Kid's Festive & party ware",
    img: productimg4,
    price: 3000,
    categoryName: "horror",
    rating: "3",
  },
  {
    _id: uuid(),
    title: "Kid's Festive & party ware",
    img: productimg1,
    price: 3000,
    categoryName: "horror",
    rating: "3",
  },
];
