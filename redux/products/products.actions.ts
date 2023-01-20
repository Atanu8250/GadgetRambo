import { Dispatch } from "redux";
import { getLaptopAPI, getMobileAPI, getTvAPI } from "./products.api";
import { ProductsTypes } from "./products.types";

// settting mobile data in state
// interface propType {}

export const getMobile = async (dispatch: Dispatch, limit: number) => {
  const mobiles = await getMobileAPI(limit);
  dispatch({
    type: ProductsTypes.GET_MOBILES_DATA,
    payload: mobiles,
  });
};
export const getLaptop = async (dispatch: Dispatch, limit: number) => {
  const laptops = await getLaptopAPI(limit);
  dispatch({
    type: ProductsTypes.GET_LAPTOPS_DATA,
    payload: laptops,
  });
};
export const getTv = async (dispatch: Dispatch, limit: number) => {
  const tv = await getTvAPI(limit);
  dispatch({
    type: ProductsTypes.GET_TV_DATA,
    payload: tv,
  });
};
