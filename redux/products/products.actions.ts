import { intrfcToastMsg } from "@/constants/constants";
import { Dispatch } from "redux";
import { deleteLaptopAPI, deleteMobileAPI, deleteTvAPI } from "./products.api";
import { ProductsTypes } from "./products.types";

// settting mobile data in state

export const getMobile = async (dispatch: Dispatch, payload: any) => {
  dispatch({
    type: ProductsTypes.GET_MOBILES_DATA,
    payload: payload,
  });
};

export const getLaptop = async (dispatch: Dispatch, payload: any) => {
  dispatch({
    type: ProductsTypes.GET_LAPTOPS_DATA,
    payload: payload,
  });
};

export const getTv = async (dispatch: Dispatch, payload: any) => {
  dispatch({
    type: ProductsTypes.GET_TV_DATA,
    payload: payload,
  });
};

export const deleteLaptop =
  (id: string, toastMsg: ({}: intrfcToastMsg) => void) =>
  (dispatch: Dispatch) => {
    deleteLaptopAPI(id)
      .then(() => {
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
