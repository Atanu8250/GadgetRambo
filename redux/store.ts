import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import cartReducer from "./cart/products.reducer";
import productsReducer from "./products/products.reducer";

const rootReducer = combineReducers({
  productsManager: productsReducer,
  cartManager: cartReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
