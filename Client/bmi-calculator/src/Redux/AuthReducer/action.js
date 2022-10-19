import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS } from "./actionType";

import axios from "axios";

export const login = (loginCred) => (dispatch) => {
  dispatch({ type: LOGIN_LOADING });
  return axios
    .post("https://salty-ridge-39845.herokuapp.com/user/login", loginCred)
    .then((res) => {
      console.log(res.data);

      if (res.data === "User Not Found Please register") {
        alert("User Not Found Please register");
        return;
      } else {
        dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      }
      return res.data;
    })

    .catch(() => {
      dispatch({ type: LOGIN_ERROR });
    });
};

export const handlelogout = (payload) => (dispatch) => {
  dispatch({ type: "LOGOUT", payload });
};
