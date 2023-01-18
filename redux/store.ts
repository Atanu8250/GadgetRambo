<<<<<<< HEAD
import { legacy_createStore, compose, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({});

// we need this part to use compose enhancer in typescript
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
// ----

const composeEnhancer: any = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));
=======
import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import cartReducer from "./cart/products.reducer";
import productsReducer from "./products/products.reducer";

const rootReducer = combineReducers({
  productsManager: productsReducer,
  cartManager: cartReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
>>>>>>> master
