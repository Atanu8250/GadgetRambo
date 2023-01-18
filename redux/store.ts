import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import cartReducer from "./cart/cart.reducer";
import { authReducer } from "./auth/auth.reducer";
import productsReducer from "./products/products.reducer";

const rootReducer = combineReducers({
  productsManager: productsReducer,
  cartManager: cartReducer,
  authManager: authReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
// export const storeType = typeof store;
