import { combineReducers } from "redux";
import fetchDataReducer from "./fetch-data-reducer";

const rootReducer = combineReducers({
  books: fetchDataReducer,
});

export default rootReducer;
