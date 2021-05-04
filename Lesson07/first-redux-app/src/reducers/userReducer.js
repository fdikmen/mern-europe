import {UPDATE_USER} from '../actions/userAction'

export default function userReducer(state ='' ,action){
    switch (action.type) {
      case UPDATE_USER:return action.payload.user;  
      default:return state;
    }
  }

/*
  //Without Default Keyword
  import {userReducer} from './userReducer'
  //With Default Keyword
  import userReducer from './userReducer'  
  */