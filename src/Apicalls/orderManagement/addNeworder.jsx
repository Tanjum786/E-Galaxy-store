import axios from "axios";

export const addNeworder = async (order,productDispatch,token) => {
  try {
    const response = await axios.post(
      "/api/user/orders",
      { ...order },
      { headers: { authorization: token } }
    );
    if (response.status===201) {
        productDispatch({type:"ADD-NEW-ORDER",payload:response.data.orders})
    }
  } catch (error) {console.error("error")}
};
