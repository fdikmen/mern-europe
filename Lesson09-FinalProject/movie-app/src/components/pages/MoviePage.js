//Created by [rcredux] snippet.
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import MovieList from '../MovieList'
import {fetchMovies  } from '../../actions/moviesAction';

export class MoviePage extends Component {
    static propTypes = {
        moviesRe:PropTypes.object.isRequired
    }

    componentDidMount() {
        this.props.fetchMovies();
    }
    
    render() {        
   //console.log("Props:",this.props.moviesRe.error);
    const errMessage = this.props.moviesRe.error.message
        return (
            <div>
                <h2>MoviePage Comp.</h2>
                {errMessage 
                ? <h3> Error Data! <br/> {errMessage}</h3>
                : <MovieList movies={this.props.moviesRe.movies}/>
                }
                
            </div>
        )
    }
}

const mapStateToProps = ({moviesReducer}) => ({
    moviesRe:moviesReducer
})

const mapDispatchToProps = {fetchMovies }

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage)