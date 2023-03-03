import { intrfcToastMsg } from "@/constants/constants";
import { Dispatch } from "redux";
import {
  deleteLaptopAPI,
  deleteMobileAPI,
  deleteTvAPI,
  getLaptopAPI,
  getMobileAPI,
  getTvAPI,
} from "./products.api";
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

export const deleteLaptop =
  (id: string, toastMsg: ({}: intrfcToastMsg) => void) =>
  (dispatch: Dispatch) => {
    deleteLaptopAPI(id)
      .then(() => {
        getLaptop(dispatch, 15);
        toastMsg({
          title: "Misssion Successful",
          desc: "Laptop item deleted successfully",
          status: "success",
        });
      })
      .catch((err) => {
        toastMsg({
          title: "Misssion aborted",
          desc: err,
          status: "info",
        });
      });
  };

export const deleteMobile =
  (id: string, toastMsg: ({}: intrfcToastMsg) => void) =>
  (dispatch: Dispatch) => {
    deleteMobileAPI(id)
      .then(() => {
        getLaptop(dispatch, 75);
        toastMsg({
          title: "Misssion Successful",
          desc: "Mobile item deleted successfully",
          status: "success",
        });
      })
      .catch((err) => {
        toastMsg({
          title: "Misssion aborted",
          desc: err,
          status: "info",
        });
      });
  };

export const deleteTv =
  (id: string, toastMsg: ({}: intrfcToastMsg) => void) =>
  (dispatch: Dispatch) => {
    deleteTvAPI(id)
      .then(() => {
        getTv(dispatch, 75);
        toastMsg({
          title: "Misssion Successful",
          desc: "Television item deleted successfully",
          status: "success",
        });
      })
      .catch((err) => {
        toastMsg({
          title: "Misssion aborted",
          desc: err,
          status: "info",
        });
      });
  };
