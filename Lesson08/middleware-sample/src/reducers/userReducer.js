import {GET_USERS} from '../actions/userAction'

export default function userReducer(state='',action)
{
    console.log(action);
    switch (action.type) {
        case GET_USERS: return action.payload.user
    
        default:
            return state;
    }
}