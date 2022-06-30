import axios from "axios";

export const getAddress = async (token, Authdispatch) => {
  try {
    const response = await axios.get("/api/user/address", {
      headers: { authorization: token },
    });
    console.log(response)
    Authdispatch({type:"GET-Address",payload:response.data.address})
  } catch (error) {}
};
