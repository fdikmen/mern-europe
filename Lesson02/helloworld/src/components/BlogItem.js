//CREATE WITH rcc SNIPPET
import React, { Component } from 'react'

export default class BlogItem extends Component {
    render() {
        console.log(this.props)
        const {blogMessage,nowNmbr} =this.props
        return (
            <div>
                <h3>{this.props.dataXYZ}</h3>
                {/* <h4>{this.props.blogMessage}</h4>
                <h4>{this.props.nowNmbr}</h4> */}
                <h4>{blogMessage}</h4>
                <h4>{nowNmbr}</h4>
            </div>
        )
    }
}