import React from 'react'

function User({user}) {
    return (
        <div style={{background:user.color}}>
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Age: {user.age}</p>
            Color: <input value={user.color} />
        </div>
    )
}

export default User
