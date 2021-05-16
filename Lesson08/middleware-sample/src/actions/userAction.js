import axios from 'axios'
export const GET_USERS = "GET_USERS"


export function updateUser(newUser)
{
    console.log("UpdateUser");
    return {type:GET_USERS,payload:{user:newUser}}
}

export const getUsers = () => {
    return (dispatch) => {
      const response = dispatch({
        type: 'FIRST',
        payload: new Promise(axios.get('https://jsonplaceholder.typicode.com/users/2')),
      })
   
      response.then((data) => {
        dispatch(updateUser(data))
      })
    }
  }

/*export function getUsers()
{
    console.log("getUser");
    return (dispatch) => {
       dispatch({
          type: 'FIRST',
          payload: (axios.get('https://jsonplaceholder.typicode.com/users/2'))
          
        })  
      }
}*/
