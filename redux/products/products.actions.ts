import { Dispatch } from "redux";
import { getLaptopAPI, getMobileAPI, getTvAPI } from "./products.api";
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
export const getLaptop = async (dispatch: Dispatch) => {
  const laptops = await getLaptopAPI();
  dispatch({
    type: ProductsTypes.GET_LAPTOPS_DATA,
    payload: laptops,
  });
};
export const getTv = async (dispatch: Dispatch) => {
  const tv = await getTvAPI();
  dispatch({
    type: ProductsTypes.GET_TV_DATA,
    payload: tv,
  });
};
