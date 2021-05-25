import { combineReducers } from "redux";
import moviesReducer from "./moviesReducer";
import newmovieReducer from './newmovieReducer'

export default combineReducers({
    moviesReducer,newmovieReducer
})

