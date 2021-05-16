//Created by [rcredux] snippet.
import React, { Component } from 'react'
import { connect } from 'react-redux'

export class MoviePage extends Component {
    render() {
        return (
            <div>
                MoviePage Comp.
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage)
