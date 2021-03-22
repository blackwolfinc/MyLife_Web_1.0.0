import {
  EDIT_POLIS
  ,
  NO_POLIS
  } from "./actionTypes";


  export const editData = (data) => (dispatch) => {
    dispatch({
        type: EDIT_POLIS,
        payload:data
      });

  }



  export const editNoPolis = (no_polis) => (dispatch)  => {
    dispatch({
      type: NO_POLIS,
      payload:no_polis
    })


  }

