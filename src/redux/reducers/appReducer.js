import { combineReducers } from "redux";
import priceReducer from "./priceReducer";

const appReducer = combineReducers({
  price: priceReducer,
});

export default appReducer;
