//Created by [rxreducer] snippet.
import { FETCH_MOVIES_FULFILLED,FETCH_MOVIES_PENDING,FETCH_MOVIES_REJECTED } from "../actions/moviesAction";
const initialState = {
    movies:[],error:{}
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case FETCH_MOVIES_FULFILLED:
        return { ...state,movies:payload }
    case FETCH_MOVIES_REJECTED:
        return { ...state,error:payload }

    default:
        return state
    }
}
