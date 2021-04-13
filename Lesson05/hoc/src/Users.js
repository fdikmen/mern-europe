import React, { Component } from 'react'
import LoaderHoc from './LoaderHoc'

class Users extends Component {
    render() {
        return (
            <div className="postContainer">
                Users Comp....

                {this.props.users.map(item=><div key={item.id}>{item.name}</div>)}
            </div>
        )
    }
}
export default LoaderHoc(Users,'users')


