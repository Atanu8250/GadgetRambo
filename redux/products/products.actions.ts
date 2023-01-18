import { getData } from "./products.api";
import { ProductsTypes } from "./products.types";

// settting mobile data in state
// interface propType {}

export const getMobile = async (dispatch: any) => {
  const mobiles = await getData();
  console.log(mobiles);

  dispatch({
    type: ProductsTypes.GET_MOBILES_DATA,
    payload: mobiles,
  });
};
