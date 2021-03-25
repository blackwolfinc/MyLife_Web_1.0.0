import {
  GET_DATA_POLIS,
  GET_DATA_TOKEN,
  GET_DATA_AWAL,
  GET_DATA_SUCSSES,
  GET_DATA_FAIL,
  GET_POLIS_AWAL,
  GET_POLIS_SUCSSES,
  GET_POLIS_FAIL,
} from "../Action/actionTypes";

const initialState = {
  // tempat penampungan data
  // data default
  // token : "",
  userPolis: [],
  loading: false,
  error: false,
  token: [],
  errorMessage: "",
};

export const getDataReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
// fungsi yang di jalankan sesuai triger

    case GET_DATA_AWAL:
      return {
        ...state,
        loading: true,
      };
    case GET_POLIS_AWAL:
      return {
        ...state,
        loading: true,
      };

    case GET_DATA_SUCSSES:
      return {
        ...state,
        loading: false,
        //   token : action.data.token ,
        token: action.payload.data.token,
      };
    case GET_POLIS_SUCSSES:
      return {
        ...state,
        loading: false,
        userPolis: action.payload.data,
      };

    case GET_DATA_FAIL:
      return {
        ...state,
        loading: false,
        token: "",
        data: [],
        error: true,
        errorMessage: action.data,
      };

    case GET_POLIS_FAIL:
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: action.data,
      };

    default:
      return {
        ...state,
      };
      break;
  }
};

export default getDataReducer;
