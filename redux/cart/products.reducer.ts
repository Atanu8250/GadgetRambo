import { ProductsTypes } from "./products.types";

interface actionProps {
  type: string;
  payload: [];
}
const initialState = {
  mobiles: [],
  televisions: [],
  laptops: [],
};

const cartReducer = (state = initialState, action: actionProps) => {
  switch (action.type) {
    case ProductsTypes.GET_MOBILES_DATA: {
      return {
        ...state,
        mobiles: action.payload,
      };
    }
    case ProductsTypes.GET_LAPTOPS_DATA: {
      return {
        ...state,
        laptops: action.payload,
      };
    }
    case ProductsTypes.GET_TV_DATA: {
      return {
        ...state,
        televisions: action.payload,
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
