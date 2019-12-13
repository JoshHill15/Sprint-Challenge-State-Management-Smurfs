import axios from "axios"
export const FETCH_SMURF_START = "FETCH_SMURF_START"
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS"
export const FETCH_SMURF_FAILURE = "FETCH_SMURF_FAILURE"

export const GET_SMURF_START = "GET_SMURF_START"
export const GET_SMURF_SUCCESS = "GET_SMURF_SUCCESS"
export const GET_SMURF_FAILURE = "GET_SMURF_FAILURE"

export const getSmurfs = () => dispatch => {
    dispatch({ type: FETCH_SMURF_START })
    axios.get("http://localhost:3333/smurfs")
    .then(res => {
        console.log("smurfs", res.data)
        dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data })
    })
    .catch(err => {
        console.log("SMURF ERR", err)
        dispatch({ type: FETCH_SMURF_FAILURE, payload: err.message })
    })
}

export const pushSmurfs = (item) => dispatch => {
    console.log("PUSH SMURFS ITEM" ,item)
    dispatch({ type: GET_SMURF_START })
    axios.post("http://localhost:3333/smurfs", item)
    .then(res => {
        console.log("pushsmurfs", res)
    })
    .catch(err => {
        console.log("PUSH SMURF ERR", err)
        dispatch({ type: GET_SMURF_FAILURE, payload: err.message })
    })
}