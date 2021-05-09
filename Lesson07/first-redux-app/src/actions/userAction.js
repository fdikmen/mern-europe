export const UPDATE_USER = 'UPDATE_USER'
export const ADD_USER = 'ADD_USER'
export const DELETE_USER = 'DELETE_USER'

//const actionName = {type:UPDATE_USER,payload:{user:"Tommy New"}}

export function updateUser(newUserName)
{
    return {type:UPDATE_USER,payload:{user:newUserName}}
}

export function addUser(newUserName)
{
    return {type:ADD_USER,payload:{user:newUserName}}
}

export function deleteUser()
{
    return {type:DELETE_USER}
}