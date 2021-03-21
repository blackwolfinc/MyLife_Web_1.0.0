import {
    LOGIN_TOKEN
  } from "../Action/actionTypes";
  
  const initialState = {
    loginStatus : false 
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
     
  
      default:
        return {
          ...state,
        };
        break;
    }
  };
  
  export default getDataReducer;
  