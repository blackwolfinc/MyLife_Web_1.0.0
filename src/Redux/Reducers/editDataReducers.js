import {
EDIT_POLIS, NO_POLIS
  } from "../Action/actionTypes";
  
  const initialState = {
    // token : "",
    data : [] ,
    no_polis: ""
  };
  

  export const getDataReducer = (state = initialState, action) => {
    const { type } = action;
    switch (type) {
      case EDIT_POLIS:
        return {
          ...state,
          loading: true,
          data : action.payload
        };
        case NO_POLIS:
          return {
            ...state,
            loading: true,
            no_polis : action.payload
          };


      default:
        return {
          ...state,
        };
        break;
    }
  };
  
  export default getDataReducer;
  