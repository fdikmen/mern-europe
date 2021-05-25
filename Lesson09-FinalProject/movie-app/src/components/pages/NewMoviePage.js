//Created by [rcredux] snippet
import React, { Component } from 'react'
import { connect } from 'react-redux'
import NewMovieForm from '../NewMovieForm'
import { addNewMovie } from '../../actions/moviesAction';

export class NewMoviePage extends Component {
    render() {
        return (
            <div>
                Add New Movie Page
                <NewMovieForm/>
            </div>
        )
    }
}

const mapStateToProps = ({newmovieReducer}) => {
    return {newmovieReducer}
}

const mapDispatchToProps = {
        addNewMovie
}

export default connect(mapStateToProps, mapDispatchToProps)(NewMoviePage)

