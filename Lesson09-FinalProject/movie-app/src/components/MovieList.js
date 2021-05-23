//Created by [rfcp] snippet
import React from 'react'
import MovieCard from './MovieCard'

function MovieList({movies}) {
    //console.log("MovieList Props",movies);

    const emptyMessage= <p>There are no movies yet.</p>
    const movieList = movies.map(item => <MovieCard key={item.id} movie={item}/>)

    return (
        <div>
            <h3>Movie List</h3>
            {movies.length === 0 ? emptyMessage : movieList}
        </div>
    )
}



export default MovieList

