import { intrfcToastMsg } from "@/constants/constants";
import { Dispatch } from "redux";
import { addCartAPI, getCartAPI, removeCartAPI } from "./cart.api";
import { CartTypes } from "./cart.types";

// adding data in cart
export const getCart = async (dispatch: Dispatch) => {
  const cartItems = await getCartAPI();
  dispatch({
    type: CartTypes.GET_CART_ITEMS,
    payload: cartItems,
  });
};

export const addCart = async (
  cartItems: any,
  dispatch: Dispatch,
  toastMsg: ({}: intrfcToastMsg) => void
) => {
  await addCartAPI(cartItems, toastMsg);
  dispatch({
    type: CartTypes.ADD_TO_CART,
    payload: cartItems,
  });
};

// removing cart items
export const removeCart = async (id: string, dispatch: Dispatch) => {
  await removeCartAPI(id)
  dispatch({
    type: CartTypes.REMOVE_FROM_CART,
    payload: id,
  });
};
