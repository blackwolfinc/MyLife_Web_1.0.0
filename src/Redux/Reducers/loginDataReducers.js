import {
    LOGIN_TOKEN,EDIT_STATUS
  } from "../Action/actionTypes";
import { editStatus } from "../Action/loginStatus";

  const initialState = {
    loginStatus : false,
    editStatusLook : false
  };

  export const getDataReducer = (state = initialState, action) => {
    const { type } = action;
    switch (type) {
  // fungsi yang di jalankan sesuai triger

      case LOGIN_TOKEN:
        return {
          ...state,
          loginStatus: action.payload,
        };
        case EDIT_STATUS:
        return {
          ...state,
          editStatusLook: action.payload,
        };


      default:
        return {
          ...state,
        };
        break;
    }
  };

  export default getDataReducer;
