import axios from 'axios'
import { API_BASE } from '../config/env';


export function fetchMovies(){
    return dispatch => {
        axios.get(`${API_BASE}/movies`)
        .then(result=>console.log(result))
    }
}


/*MOVIES
https://60a557fcc0c1fd00175f3ba0.mockapi.io/movies
USERS
https://60a557fcc0c1fd00175f3ba0.mockapi.io/users*/