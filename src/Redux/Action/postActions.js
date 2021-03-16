import  axios from "axios"
import {
GET_DATA_POLIS,
GET_DATA_TOKEN

} from "./actionTypes"



import React from 'react'

export const GetDataToken = () => {
  return ( )=>{

    let config = {
      method: "post",
      url: "https://eli-uat-api.myequity.id/mobmyelife/services/api/v1/login",

      data: {
        username: "george",
        password: "george12345",
      },
    };

    axios(config)
      .then(function (response) {
        alert(response.data.data.token);
        // SetloginStatus(true);
        // SetTokenLogin(response.data.data.token);
        // SetloginStatus(true);
      })
      .catch(function (error) {
        console.log(error);
      });

  }
}
