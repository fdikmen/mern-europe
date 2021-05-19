//Created by [rcredux] snippet.
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import MovieList from '../MovieList'
import {fetchMovies  } from '../../actions/moviesAction';

export class MoviePage extends Component {
    static propTypes = {
        movies:PropTypes.array.isRequired
    }

    componentDidMount() {
        this.props.fetchMovies();
    }
    

    render() {        
   console.log("Props:",this.props);
        return (
            <div>
                <h2>MoviePage Comp.</h2>
                <MovieList movies={this.props.movies}/>
            </div>
        )
    }
}

const mapStateToProps = ({moviesReducer}) => ({
    movies:moviesReducer
})

const mapDispatchToProps = {fetchMovies }

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage)