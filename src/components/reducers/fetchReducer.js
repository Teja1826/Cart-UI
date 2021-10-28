import { FETCH_SUCCESS, FETCH_ERROR } from "../actionTypes";
export const initialState = {
  products: [],
  error: "",
};

const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return { products: action.payload };
    case FETCH_ERROR:
      return { error: action.payload };
    default:
      return state;
  }
};

export default fetchReducer;
