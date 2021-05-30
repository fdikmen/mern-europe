//Created by [rxreducer] snippet.
import { 
    DELETE_MOVIE_FULFILLED,DELETE_MOVIE_PENDING,DELETE_MOVIE_REJECTED,
    FETCH_MOVIES_FULFILLED,FETCH_MOVIES_PENDING,FETCH_MOVIES_REJECTED } from "../actions/moviesAction";
const initialState = {
    movies:[],error:{},loading:false
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
    case FETCH_MOVIES_PENDING:
        return { ...state,loading:true }
    case FETCH_MOVIES_FULFILLED:
        return { ...state,movies:payload,loading:false }
    case FETCH_MOVIES_REJECTED:
        return { ...state,error:payload,loading:false }
        
        //type== DELETE_MOVIE 
        case DELETE_MOVIE_PENDING:
            return { ...state,loading:true,done:false }
        case DELETE_MOVIE_FULFILLED:
            //console.log("From Action=>",payload.id);
            //console.log("From State=>",state.movies);
            return { ...state
                ,movies:state.movies.filter(i=>i.id !== payload.id)
                ,loading:false,done:true }
        case DELETE_MOVIE_REJECTED:
            return { ...state,error:payload,loading:false,done:false }
    default:
        return state
    }
}
