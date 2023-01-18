import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./auth/auth.reducer";
import cartReducer from "./cart/products.reducer";
import productsReducer from "./products/products.reducer";

const rootReducer = combineReducers({
  productsManager: productsReducer,
  cartManager: cartReducer,
  authManager: authReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
// export const storeType = typeof store;