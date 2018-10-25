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

// // Simple examples
// alpha.data.intraday(`msft`).then(data => {
//   console.log(data);
// });


export const getData = () => {
  return dispatch => {
    dispatch({ type: FETCH_DATA });
    alpha.data
      .intraday(`msft`)
      .then(response => dispatch({ type: DATA_FETCHED, payload: response.data }))
      .catch(err => dispatch({ type: ERROR, err }));
  };
};

export const addNote = note => {

  let timeStamp = new Date();

  return dispatch => {
    dispatch({ type: FETCH_DATA });
    axios
      .post("https://killer-notes.herokuapp.com/note/create", note)
      .then(response =>
        dispatch({
          type: ADD_WIDGET,
          payload: {
            //the payload you're giving the API to populate the new note
            title: note.title,
            textBody: note.textBody,
            id: timeStamp //using a timestamp as the ID as it's unique enough
          }, 
        })
      )
      .then(
        // Re-GET all the notes, with the newly added one included
        axios.get("https://killer-notes.herokuapp.com/note/get/all")
        .then(response => dispatch({ type: DATA_FETCHED, payload: response.data }))
      ).catch(err => dispatch({ type: ERROR, err }));
  };

};

export const deleteNote = id => {
  //feed in the note id from the deleteClick event in NoteView.js
  console.log('the id of the note we shall delete:' + id);
  return dispatch => {
    dispatch({ type: FETCH_DATA });
    axios
      .delete(`https://killer-notes.herokuapp.com/note/delete/${id}`)
      .then(response => dispatch({ type: DELTE_WIDGET, id }))
      .catch(err => dispatch({ type: ERROR, err }));
  };

};
