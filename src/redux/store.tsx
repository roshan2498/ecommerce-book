import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import productReducer from "./ducks/product";
import cartReducer from "./ducks/cart";
import { composeWithDevTools } from "redux-devtools-extension";
import orderReducer from "./ducks/order";

const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer,
  order: orderReducer,
});

const middleWares = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleWares))
);

export default store;
