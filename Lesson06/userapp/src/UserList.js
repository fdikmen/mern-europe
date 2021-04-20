import React,{useContext} from 'react'
import User from './User'
import {UserContext} from './context/UserContext'

function UserList() {
    // users = [{}]  ------> user={}
   //const context = useContext(UserContext)
   const {users} = useContext(UserContext)
    return (
      <div>
        <h2>User List</h2>
        {users.map((item) => (
          <User key={item.id} user={item} />
        ))}
      </div>
    );
}

export default UserList
