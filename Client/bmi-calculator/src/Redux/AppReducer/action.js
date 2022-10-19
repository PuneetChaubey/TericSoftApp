import {
  ADD_DATA_FAILURE,
  ADD_DATA_REQUEST,
  ADD_DATA_SUCCESS,
  GET_DATA_FAILURE,
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
 
} from "./actionType";
import axios from "axios";

const getDataRequest = (payload) => {
  return {
    type: GET_DATA_REQUEST,
    payload,
  };
};
const getDataSuccess = (payload) => {
  return {
    type: GET_DATA_SUCCESS,
    payload,
  };
};
const getDataFailure = (payload) => {
  return {
    type: GET_DATA_FAILURE,
    payload,
  };
};

const addDataRequest = (payload) => {
  return {
    type: ADD_DATA_REQUEST,
    payload,
  };
};
const addDataSuccess = (payload) => {
  return {
    type: ADD_DATA_SUCCESS,
    payload,
  };
};

const addDataFailure = (payload) => {
  return {
    type: ADD_DATA_FAILURE,
    payload,
  };
};


const getData = (payload) => (dispatch) => {
  dispatch(getDataRequest());
  console.log(payload);
  return axios
    .get("https://salty-ridge-39845.herokuapp.com/getBmi/getCalculatedBmi", {
      headers: {
        "Content-Type": "application/json",
        authentication: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((res) => {
      console.log(res);
      dispatch(getDataSuccess(res.data));
    })
    .catch((err) => dispatch(getDataFailure(err)));
};

const addData = (payload) => (dispatch) => {
   console.log(payload)
   dispatch(addDataRequest());
   return axios
     .post(
       "https://salty-ridge-39845.herokuapp.com/getBmi/calculatedBmi",
       payload,
       {
         headers: {
           "Content-Type": "application/json",
           authentication: `Bearer ${localStorage.getItem("token")}`,
         },
       }
     )
     .then((res) => {
       dispatch(addDataSuccess());
       console.log(res.data);
     })
     .catch((err) => dispatch(addDataFailure()));
 };

export { getData, addData };
