import React, { Component } from 'react'
import LoaderHoc from './LoaderHoc'

class Posts extends Component {
    render() {
        //console.log("PostsComp:",this.props)
        return (
            <div className="postContainer">
            {/* ==   -> 2 =  "2"
                ===  -> 2 != "2" */}
                Post Comp....
            {/* {this.props.loading === true ? <div>X</div> : <div>Y</div>} */}
                {/* {this.props.loading 
                ? <div>Loading...</div> 
                :this.props.posts.map(item=><div key={item.id}>{item.title}</div>)
                } */}

                {this.props.posts.map(item=><div key={item.id}>{item.title}</div>)}
            </div>
        )
    }
}
export default LoaderHoc(Posts,'posts')
