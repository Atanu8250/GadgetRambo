import { CartTypes } from "./cart.types";
import * as interfaces from "./cart.interfaces";

const initialState = {
  cart: [],
};

const cartReducer = (
  state: interfaces.cartStateProps = initialState,
  action: interfaces.actionProps
) => {
  switch (action.type) {
    case CartTypes.GET_CART_ITEMS: {
      return {
        ...state,
        cart: action.payload,
      };
    }
    case CartTypes.REMOVE_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter(
          (item: interfaces.cartItemsProps) => item.id !== action.payload
        ),
      };
    }
    case CartTypes.UPDATE_CART: {
      return {
        ...state,
        cart: action.payload,
      };
    }

    default:
      return state;
  }
};

export default cartReducer;
