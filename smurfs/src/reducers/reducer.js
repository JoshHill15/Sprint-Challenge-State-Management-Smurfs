import {
  FETCH_SMURF_START,
  FETCH_SMURF_SUCCESS,
  FETCH_SMURF_FAILURE,
  GET_SMURF_FAILURE,
  GET_SMURF_SUCCESS,
  GET_SMURF_START
} from "../actions/smurfAction";

const initialState = {
  isFetching: false,
  error: "",
  smurfs: null
};

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURF_START:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_SMURF_SUCCESS:
      return {
        ...state,
        isFetching: false,
        smurfs: action.payload
      };
    case FETCH_SMURF_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    case GET_SMURF_START:
        return {
            ...state,
            isFetching: true,

        }
    case GET_SMURF_SUCCESS:
        return {
            ...state,
            isFetching: false,
            smurfs: [...state.smurfs, action.payload]
        }
    case GET_SMURF_FAILURE:
        return {
            ...state,
            isFetching: false,
            error: action.payload
        }
    default:
      return state;
  }
};
