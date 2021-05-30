//Created by [rcredux] snippet
import React, { Component } from 'react'
import { connect } from 'react-redux'
import NewMovieForm from '../NewMovieForm'
import { addNewMovie,getMovie,updateMovie } from '../../actions/moviesAction';

export class NewMoviePage extends Component {
    componentDidMount() {
       const {match} = this.props;
       if (!this.props.movie && match.params.id) {
           this.props.getMovie(match.params.id);
       } 
    }
    
    
    render() {
        return (
          <div>
            Add New Movie Page
            <NewMovieForm
              done={this.props.newmovieReducer.done}
              errorText={this.props.newmovieReducer.error}
              loading={this.props.newmovieReducer.loading}
              addNewMovie={this.props.addNewMovie}
              updateMovie={this.props.updateMovie}
              movie={this.props.movie}
              gotMovie={this.props.newmovieReducer.gotMovie}
            />
          </div>
        );
    }
}
const mapStateToProps = ({newmovieReducer,moviesReducer},props) => {
return {newmovieReducer,
    movie:moviesReducer.movies
            .find(item=>item.id === props.match.params.id)}
}

const mapDispatchToProps = {
        addNewMovie,getMovie,updateMovie
}

export default connect(mapStateToProps, mapDispatchToProps)(NewMoviePage)

