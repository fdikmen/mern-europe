import React from 'react'
import { connect } from 'react-redux'
import { getUsers } from "./actions/userAction";

export const User = (props) => {
    return (
        <div>
            User List
            <button onClick={()=>getUsers()}>GET USER</button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    getUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(User)
