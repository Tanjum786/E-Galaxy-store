import axios from "axios";

export const removefromCart = async (_id, token, productDispatch) => {
  try {
    const response = await axios.delete(`/api/user/cart/${_id}`, {
      headers: { authorization: token },
    });
    productDispatch({ type: "REMOVE_FROM_CART", payload: response.data.cart });
  } catch (error) {
      console.error(error)
  }
};
