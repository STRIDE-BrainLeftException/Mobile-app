import { all, fork } from "redux-saga/effects";
import planetsSaga from "./priceSaga";
function* rootSaga() {
  yield fork(planetsSaga);
}

export default rootSaga;
