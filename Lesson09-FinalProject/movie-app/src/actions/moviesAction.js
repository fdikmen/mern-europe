import axios from 'axios'
import { API_BASE } from '../config/env';

export const FETCH_MOVIES_PENDING = "FETCH_MOVIES_PENDING"
export const FETCH_MOVIES_FULFILLED = "FETCH_MOVIES_FULFILLED"
export const FETCH_MOVIES_REJECTED = "FETCH_MOVIES_REJECTED"

export const ADD_MOVIES_PENDING = "ADD_MOVIES_PENDING"
export const ADD_MOVIES_FULFILLED = "ADD_MOVIES_FULFILLED"
export const ADD_MOVIES_REJECTED = "ADD_MOVIES_REJECTED"

/*Without REDUX PROMISE MIDDLEWARE */
/*export function fetchMovies(){
    return dispatch => {
        axios.get(`${API_BASE}/movies`)
        .then(res=>res.data)
        .then(result=>dispatch({type:FETCH_MOVIES,payload:result}))
        .catch(err=>dispatch({type:FETCH_MOVIES_ERRORS,payload:err}))        
    }
}*/

/*With REDUX PROMISE MIDDLEWARE */
export function fetchMovies(){
    return dispatch => {
        dispatch({type:"FETCH_MOVIES",
        payload:axios.get(`${API_BASE}/movies`).then(res=>res.data)})    
    }
}

export function addNewMovie({title,cover}){
    return dispatch => {
        dispatch(
            {
                type:"ADD_MOVIES",
                payload:axios.post(`${API_BASE}/movies`,{title,cover})
            }
        )
    }
}


/*MOVIES
https://60a557fcc0c1fd00175f3ba0.mockapi.io/movies
USERS
https://60a557fcc0c1fd00175f3ba0.mockapi.io/users*/