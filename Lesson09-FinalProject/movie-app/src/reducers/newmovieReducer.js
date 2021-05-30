//Created by [rxreducer] snippet

import { ADD_MOVIES_FULFILLED,ADD_MOVIES_PENDING,ADD_MOVIES_REJECTED,
GET_MOVIE_FULFILLED,GET_MOVIE_PENDING,GET_MOVIE_REJECTED } from "../actions/moviesAction";

const initialState = {
    movies:[],error:{},loading:false,done:false,gotMovie:{}
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        //type==ADD_MOVIES
        case ADD_MOVIES_PENDING:
            return { ...state,loading:true,done:false }
        case ADD_MOVIES_FULFILLED:
            return { ...state,movies:payload,loading:false,done:true }
        case ADD_MOVIES_REJECTED:
            return { ...state,error:payload,loading:false,done:false }
        //type== GET_MOVIE 
        case GET_MOVIE_PENDING:
            return { ...state,loading:true,done:false }
        case GET_MOVIE_FULFILLED:
            return { ...state,gotMovie:payload,loading:false,done:true }
        case GET_MOVIE_REJECTED:
            return { ...state,error:payload,loading:false,done:false }
    default:
        return state
    }
}
