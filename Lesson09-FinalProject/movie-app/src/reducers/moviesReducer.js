//Created by [rxreducer] snippet.
import { FETCH_MOVIES_FULFILLED,FETCH_MOVIES_PENDING,FETCH_MOVIES_REJECTED } from "../actions/moviesAction";
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
    default:
        return state
    }
}
