import axios from "axios";

export const updateCart = async (_id,actionType,token,productDispatch) => {
  try {
    const response = await axios.post(
      `/api/user/cart/${_id}`,
      {
        action: { type: actionType },
      },
      { headers: { authorization: token } }
    );
console.log(response)
    productDispatch({ type: "UPDATE_CART", payload: response.data.cart });
  } catch (error) {
      console.error(error)
  }
};
