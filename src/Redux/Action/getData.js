import axios from "axios";
import {
  GET_DATA_AWAL,
  GET_DATA_SUCSSES,
  GET_DATA_FAIL,
  GET_POLIS_AWAL,
  GET_POLIS_SUCSSES,
  GET_POLIS_FAIL,
} from "./actionTypes";

export const getData = (data) => (dispatch) => {
  dispatch({
    type: GET_DATA_AWAL,
    Loading: true,
    Error: null,
  });

  axios
    .post(
      `https://eli-uat-api.myequity.id/mobmyelife/services/api/v1/login`,
      data
    )
    .then((response) => {
      dispatch({
        type: GET_DATA_SUCSSES,
        payload: response.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: GET_DATA_FAIL,
        payload: err,
      });
    });

  //   try {
  //     const res = axios.post(
  //       "https://eli-uat-api.myequity.id/mobmyelife/services/api/v1/login",
  //       data
  //     );
  //     dispatch({
  //       type: GET_DATA_SUCSSES,
  //       payload: res
  //     });

  //     console.log(res)
  //   } catch (error) {
  //     console.log(error);
  //     dispatch({
  //       type: GET_DATA_FAIL,
  //       payload : error
  //     });
  //   }
};
//===========================================

export const GetDataPolis = (data, token) => (dispatch) => {
  dispatch({
    type: GET_POLIS_AWAL,
    Loading: true,
    Error: null,
  });
  axios

  // header ditaruh di action
    .get(
      `https://eli-uat-api.myequity.id/mobmyelife/services/api/v1/profile?search_query_1=${data}`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    )
    .then((response) => {
      dispatch({
        type: GET_POLIS_SUCSSES,
        payload: response.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: GET_POLIS_FAIL,
        payload: err,
      });
    });
};
