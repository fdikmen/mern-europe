//Created by [rcredux] snippet.
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

export class MoviePage extends Component {
    static propTypes = {
        movies:PropTypes.array.isRequired
    }
    render() {        
   console.log("Props:",this.props);
        return (
            <div>
                MoviePage Comp.
            </div>
        )
    }
}

const mapStateToProps = ({moviesReducer}) => ({
    movies:moviesReducer
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage)
