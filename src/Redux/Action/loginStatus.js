import axios from "axios";
import {

  LOGIN_TOKEN,
} from "./actionTypes";



export const loginStatus = (login_token) => (dispatch) =>{
    dispatch({
        type : LOGIN_TOKEN,
        payload : login_token

    })
  
}
