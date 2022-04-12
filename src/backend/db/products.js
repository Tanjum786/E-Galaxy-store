import { v4 as uuid } from "uuid";
import {
  image5,
  kidsimg2,
  kidsimg3,
  kidsimg4,
  kidsimg5,
  mensimg2,
  mensimg3,
  productimg1,
  productimg10,
  productimg11,
  productimg2,
  productimg3,
  productimg4,
  productimg5,
  productimg6,
  productimg7,
  productimg8,
  productimg9,
} from "../../assets/images";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Adidas Men's T-Shirts",
    img: productimg1,
    price: 499,
    Quantity: 1,
    rating: 4,
    categoryName: "Men's wear",
  },
  {
    _id: uuid(),
    title: "Kid's Festive & party ware",
    img: image5,
    price: 1899,
    Quantity: 1,
    rating: 2,
    categoryName: "Kid's wear",
  },
  {
    _id: uuid(),
    title: "Adidas Men's Hoodies",
    img: productimg2,
    price: 799,
    Quantity: 1,
    rating: 3,
    categoryName: "Men's wear",
  },
  {
    _id: uuid(),
    title: "Womens Rayon Embroidered Straight Kurta",
    img: productimg3,
    price: 2999,
    Quantity: 1,
    categoryName: "women's wear",
    rating: 3,
  },
  {
    _id: uuid(),
    title: "Womens Rayon Embroidered Straight Kurta",
    img: productimg4,
    price: 1499,
    Quantity: 1,
    categoryName: "women's wear",
    rating: 3,
  },
  {
    _id: uuid(),
    title: "Womens Rayon Embroidered Straight Kurta",
    img: productimg5,
    price: 989,
    Quantity: 1,
    categoryName: "women's wear",
    rating: 4,
  },
  {
    _id: uuid(),
    title: "Biba Kurtis Collection For Kid",
    img: productimg6,
    price: 999,
    Quantity: 1,
    categoryName: "Kid's wear",
    rating: 5,
  },
  {
    _id: uuid(),
    title: "Biba Kurtis Collection For Women",
    img: productimg7,
    price: 799,
    Quantity: 1,
    categoryName: "women's wear",
    rating: 3,
  },
  {
    _id: uuid(),
    title: "Stylish Womens Kurtis",
    img: productimg8,
    price: 399,
    Quantity: 1,
    categoryName: "women's wear",
    rating: 2,
  },
  {
    _id: uuid(),
    title: "Biba Kurtis Collection For Women",
    img: productimg9,
    price: 900,
    Quantity: 1,
    categoryName: "women's wear",
    rating: 3,
  },
  {
    _id: uuid(),
    title: "Stylish Womens Kurtis",
    img: productimg10,
    price: 599,
    Quantity: 1,
    categoryName: "women's wear",
    rating: 3,
  },
  {
    _id: uuid(),
    title: "Stylish Womens Kurtis",
    img: productimg11,
    price: 599,
    Quantity: 1,
    categoryName: "women's wear",
    rating: 3,
  },
  {
    _id: uuid(),
    title: "Wedding Wear Kids Modern Gown",
    img: kidsimg3,
    price: 1999,
    Quantity: 1,
    rating: 2,
    categoryName: "Kid's wear",
  },
  {
    _id: uuid(),
    title: "Wedding Wear Kids Modern Gown",
    img: kidsimg2,
    price: 1699,
    Quantity: 1,
    rating: 4,
    categoryName: "Kid's wear",
  },
  {
    _id: uuid(),
    title: "Kid's Festive & party ware",
    img: kidsimg4,
    price: 599,

    Quantity: 1,
    rating: 2,
    categoryName: "Kid's wear",
  },
  {
    _id: uuid(),
    title: "Kid's Festive & party ware",
    img: kidsimg4,
    price: 1099,
    Quantity: 1,
    rating: 4,
    categoryName: "Kid's wear",
  },
  {
    _id: uuid(),
    title: "Kid's Festive & party ware",
    img: kidsimg5,
    price: 399,
    Quantity: 1,
    rating: 1,
    categoryName: "Kid's wear",
  },
  {
    _id: uuid(),
    title: "Adidas Men's T-Shirts",
    img: mensimg2,
    price: 999,
    Quantity: 1,
    rating: 4,
    categoryName: "Men's wear",
  },
  {
    _id: uuid(),
    title: "Adidas Men's T-Shirts",
    img: mensimg3,
    price: 499,
    Quantity: 1,
    rating: 4,
    categoryName: "Men's wear",
  },
];
