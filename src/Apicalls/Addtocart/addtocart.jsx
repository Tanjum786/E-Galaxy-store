import axios from "axios";

export const addTocart = async (product,token, productDispatch) => {
  try {
    const response = await axios.post(
      "/api/user/cart",
      { product },
      { headers: { authorization: token } }
    );
    productDispatch({ type: "ADD_TO_CART", payload: response.data.cart });
  } catch (error) {
      console.error(error)
  }
};
