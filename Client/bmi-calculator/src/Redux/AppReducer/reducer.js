import {
 
  ADD_DATA_FAILURE,
  ADD_DATA_REQUEST,
  ADD_DATA_SUCCESS,
  GET_DATA_FAILURE,
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
} from "./actionType";

const initialState = {
  data: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_DATA_REQUEST:
      return { ...state, isLoading: true, isError: false };
    case GET_DATA_SUCCESS:
      return {
        ...state,
        data: payload.reverse(),
        isLoading: false,
        isError: false,
      };
    case GET_DATA_FAILURE:
      return { ...state, isError: true, isLoading: false };
    case ADD_DATA_REQUEST:
      return { ...state, isError: false, isLoading: true };
    case ADD_DATA_SUCCESS:
      return {...state,isError:false, isLoading:false }
    case ADD_DATA_FAILURE:
      return { ...state, isError: true, isLoading: false };
    default:
      return state;
  }
};

export { reducer };
