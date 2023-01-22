import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { authReducer } from "./auth/auth.reducer";
import { usersReducer } from "./users/users.reducer";
import cartReducer from "./cart/cart.reducer";
import productsReducer from "./products/products.reducer";
import newsReducer from "./news/news.reducer";

const rootReducer = combineReducers({
  productsManager: productsReducer,
  cartManager: cartReducer,
  authManager: authReducer,
  newsManager: newsReducer,
  usersManager: usersReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export type State = ReturnType<typeof rootReducer>;
