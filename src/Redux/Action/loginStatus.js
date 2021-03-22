import axios from "axios";
import {
  EDIT_STATUS,
  LOGIN_TOKEN,
} from "./actionTypes";



export const loginStatus = (login_token) => (dispatch) =>{
    dispatch({
        type : LOGIN_TOKEN,
        payload : login_token

    })

}


export const editStatus =  (status) => (dispatch => {
  dispatch({
      type : EDIT_STATUS ,
      payload : status



  })

})
