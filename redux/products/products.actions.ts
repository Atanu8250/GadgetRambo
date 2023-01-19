import { Dispatch } from "redux";
import { getMobileAPI } from "./products.api";
import { ProductsTypes } from "./products.types";

// settting mobile data in state
// interface propType {}

export const getMobile = async (dispatch: Dispatch) => {
  const mobiles = await getMobileAPI();
  dispatch({
    type: ProductsTypes.GET_MOBILES_DATA,
    payload: mobiles,
  });
};
