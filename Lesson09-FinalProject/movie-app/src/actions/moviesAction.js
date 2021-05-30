import axios from 'axios'
import { API_BASE } from '../config/env';

export const FETCH_MOVIES_PENDING = "FETCH_MOVIES_PENDING"
export const FETCH_MOVIES_FULFILLED = "FETCH_MOVIES_FULFILLED"
export const FETCH_MOVIES_REJECTED = "FETCH_MOVIES_REJECTED"

export const GET_MOVIE_PENDING = "GET_MOVIE_PENDING"
export const GET_MOVIE_FULFILLED = "GET_MOVIE_FULFILLED"
export const GET_MOVIE_REJECTED = "GET_MOVIE_REJECTED"

export const ADD_MOVIES_PENDING = "ADD_MOVIES_PENDING"
export const ADD_MOVIES_FULFILLED = "ADD_MOVIES_FULFILLED"
export const ADD_MOVIES_REJECTED = "ADD_MOVIES_REJECTED"

export const UPDATE_MOVIE_PENDING = "UPDATE_MOVIE_PENDING"
export const UPDATE_MOVIE_FULFILLED = "UPDATE_MOVIE_FULFILLED"
export const UPDATE_MOVIE_REJECTED = "UPDATE_MOVIE_REJECTED"

export const DELETE_MOVIE_PENDING = "DELETE_MOVIE_PENDING"
export const DELETE_MOVIE_FULFILLED = "DELETE_MOVIE_FULFILLED"
export const DELETE_MOVIE_REJECTED = "DELETE_MOVIE_REJECTED"

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

export function getMovie(id){
    return dispatch => {
        dispatch({type:"GET_MOVIE",
        payload:axios.get(`${API_BASE}/movies/${id}`).then(res=>res.data)})    
    }
}

export function deleteMovie(id){
    return dispatch => {
        dispatch({type:"DELETE_MOVIE",
        payload:axios.delete(`${API_BASE}/movies/${id}`)
        .then(res=>Object.assign({},res.data,{id}))})    
    }
}

export function updateMovie({_id,title,cover}){
    return dispatch => {
        dispatch(
            {
                type:"UPDATE_MOVIE",
                payload:axios.put(`${API_BASE}/movies/${_id}`,{title,cover})
            }
        )
    }
}

export function addNewMovie({title,cover}){
    console.log("Aciton DATA",title,cover);
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