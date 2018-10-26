import {
  FETCH_DATA,
  DATA_FETCHED,
  ERROR
} from "../actions";

const initialState = {
  widgets: [],
  fetching: false,
  success: false,
  error: null
};

export const widgetReducers = (state = initialState, action) => {
  switch (action.type) {

    case FETCH_DATA:
      return { ...state, fetching: true };
    case ERROR:
      return { ...state, error: "Error" + action.err };
    case DATA_FETCHED:
      return { ...state, notes: action.payload, fetching: false };

    default:
      return state;

  }
};