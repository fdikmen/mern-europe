//Created by [rxreducer] snippet

import { ADD_MOVIES_FULFILLED,ADD_MOVIES_PENDING,ADD_MOVIES_REJECTED } from "../actions/moviesAction";

const initialState = {
    movies:[],error:{},loading:false
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_MOVIES_PENDING:
            return { ...state,loading:true }
        case ADD_MOVIES_FULFILLED:
            return { ...state,movies:payload,loading:false }
        case ADD_MOVIES_REJECTED:
            return { ...state,error:payload,loading:false }
    default:
        return state
    }
}
