export const UPDATE_USER = 'UPDATE_USER'

//const actionName = {type:UPDATE_USER,payload:{user:"Tommy New"}}

export function updateUser(newUserName)
{
    return {type:UPDATE_USER,payload:{user:newUserName}}
}