import {UPDATE_USER,ADD_USER,DELETE_USER} from '../actions/userAction'

export default function userReducer(state ='' ,action){
    switch (action.type) {
      case UPDATE_USER:return action.payload.user;  
      case ADD_USER:return state+" - "+action.payload.user;  
      case DELETE_USER:return "";  
      default:return state;
    }
  }

/*
  //Without Default Keyword
  import {userReducer} from './userReducer'
  //With Default Keyword
  import userReducer from './userReducer'  
  */