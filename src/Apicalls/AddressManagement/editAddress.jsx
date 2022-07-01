import axios from "axios";
import { Toast } from "../../components";

export const editAddressApi = async (address, token, productDispatch) => {
  try {
    const response = await axios.post(
      `/api/user/address/${address._id}`,
      { address },
      { headers: { authorization: token } }
    );
    console.log(response.data.address);
    if (response.status === 200) {
      productDispatch({ type: "EDIT-ADDRESS", payload: response.data.address });
      Toast("sucessfully updated address", "success");
    }
  } catch (error) {
    console.log(error);
  }
};
