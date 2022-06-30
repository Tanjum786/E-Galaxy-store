import axios from "axios";
import { Toast } from "../../components";

export const removeAddress = async (_id, token, Authdispatch) => {
  try {
    const response = await axios.delete(`/api/user/address/${_id}`, {
      headers: { authorization: token },
    });
    if (response.status === 200) {
      Authdispatch({ type: "REMOVE-ADDRESS", payload: response.data.address });
      Toast("sucessfully Removed address", "success");

    }
  } catch (error) {
    console.log(error);
  }
};
