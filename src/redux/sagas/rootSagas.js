import { all, fork } from "redux-saga/effects";
import pricesSaga from "./priceSaga";
function* rootSaga() {
  yield fork(pricesSaga);
}

export default rootSaga;
