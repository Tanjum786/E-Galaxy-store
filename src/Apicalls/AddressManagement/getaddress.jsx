import axios from "axios";

export const getAddress = async (token, productDispatch) => {
  try {
    const response = await axios.get("/api/user/address", {
      headers: { authorization: token },
    });
    console.log(response)
    productDispatch({type:"GET-Address",payload:response.data.address})
  } catch (error) {}
};
