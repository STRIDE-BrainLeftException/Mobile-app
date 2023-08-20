import { GET_PRICES_SUCCESS } from "../actions";

const priceReducer = (state = { prices: [] }, action) => {
  switch (action.type) {
    case GET_PRICES_SUCCESS:
      console.log(action);
      return { ...state, prices: action.prices.data };
    default:
      return state;
  }
};

export default priceReducer;
