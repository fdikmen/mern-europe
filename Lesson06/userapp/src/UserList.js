import React from 'react'
import User from './User'

function UserList({users,changeColor}) {
    return (
        <div>
            <h2>user List</h2>
            {users.map(item=>(<User key={item.id} user={item} changeColor={changeColor}/>))}
        </div>
    )
}

export default UserList
