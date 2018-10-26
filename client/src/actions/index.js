import axios from "axios";
export const ADD_WIDGET = "ADD_WIDGET";
export const DELTE_WIDGET = "DELTE_WIDGET";
export const FETCH_DATA = "FETCH_DATA";
export const DATA_FETCHED = "DATA_FETCHED";
export const ERROR = "ERROR";
/**
 * Init Alpha Vantage with your API key.
 *
 * @param {String} key
 *   Your Alpha Vantage API key.
 */
const alpha = require('alphavantage')({ key: 'IMIJDBX1MB1LDG8S' });

export const getData = () => {
  return dispatch => {
    dispatch({ type: FETCH_DATA });
    alpha.data
      .intraday(`msft`)
      .then(response => dispatch({ type: DATA_FETCHED, payload: response.data }))
      .catch(err => dispatch({ type: ERROR, err }));
  };
};