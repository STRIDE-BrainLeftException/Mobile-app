import { call, put, takeEvery } from "redux-saga/effects";
import { GET_PRICES_FETCH, GET_PRICES_SUCCESS } from "../actions";
import { BASE_URL } from "../../utils/constants";
import { authFetch } from "../../utils/fetch";

//required params
// {
//   start_planet_id;
//   end_planet_id;
//   ship_type_id;
//   package_id;
//   seat_count;
// }

function pricesFetch(params) {
  console.log("prices fetch called");
  return authFetch(`/api/price`, "POST", params).then((response) => {
    const data = response.json();
    return data;
  });
}

function* callPricesFetch() {
  const prices = yield call(pricesFetch);
  yield put({ type: GET_PRICES_SUCCESS, prices });
}

function* pricesSaga() {
  yield takeEvery(GET_PRICES_FETCH, callPricesFetch);
}

export default pricesSaga;
