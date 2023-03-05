import { intrfcToastMsg } from "@/constants/constants";
import { Dispatch } from "redux";
import { addCartAPI, getCartAPI, removeCartAPI } from "./cart.api";
import { CartTypes } from "./cart.types";

//getting data from cart
export const getCart = async (dispatch: Dispatch) => {
  dispatch({
    type: CartTypes.GET_CART_ITEMS,
    payload: await getCartAPI(),
  });
};

// adding data in cart
export const addCart = async (
  cartItems: any,
  toastMsg: ({}: intrfcToastMsg) => void
) => {
  await addCartAPI(cartItems, toastMsg);
};

// removing cart items
export const removeCart = async (
  id: string,
  dispatch: Dispatch,
  toastMsg: ({}: intrfcToastMsg) => void
) => {
  await removeCartAPI(id, toastMsg);
  dispatch({
    type: CartTypes.REMOVE_FROM_CART,
    payload: id,
  });
};
