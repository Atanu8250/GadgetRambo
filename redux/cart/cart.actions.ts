import { addCartAPI, getCartAPI } from "./cart.api";
import { CartTypes } from "./cart.types";

// adding data in cart
export const getCart = async (dispatch: any) => {
  const cartItems = await getCartAPI();
  dispatch({
    type: CartTypes.GET_CART_ITEMS,
    payload: cartItems,
  });
};

export const addCart = async (cartItems: any, dispatch: any) => {
  await addCartAPI(cartItems);
  dispatch({
    type: CartTypes.ADD_TO_CART,
    payload: cartItems,
  });
};

// removing cart items
export const removeCart = (id: any, dispatch: any) => {
  dispatch({
    type: CartTypes.REMOVE_FROM_CART,
    payload: id,
  });
};
