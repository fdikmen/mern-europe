//Created by [rfcp] snippet
import React from 'react'
import MovieCard from './MovieCard'
import { Grid } from 'semantic-ui-react'
import {HashLoader} from "react-spinners";

function MovieList({movies,loading,deleteMovie}) {
    //console.log("MovieList Props",movies);

    const emptyMessage= <p>There are no movies yet.</p>
    const movieList = (
      <Grid>
        <Grid.Row columns={3}>
          {movies.map((item) => (
            <Grid.Column key={item.id}>
              <MovieCard deleteMovie={deleteMovie} movie={item} />
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    );

    return (
        <div>
            <h3>Movie List</h3>
            <HashLoader color={'#36d7b7'} loading={loading}/>
            {movies.length === 0 ? emptyMessage : movieList}
        </div>
    )
}



export default MovieList


