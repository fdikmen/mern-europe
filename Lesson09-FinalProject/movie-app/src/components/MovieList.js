//Created by [rfcp] snippet
import React from 'react'
import PropTypes from 'prop-types'

function MovieList({movies}) {
    console.log("MovieList Props",movies);

    const emptyMessage= <p>There are no movies yet.</p>
    const movieList = <div>Movie List...</div>

    return (
        <div>
            <h3>Movie List</h3>
            {movies.length === 0 ? emptyMessage : movieList}
        </div>
    )
}

MovieList.propTypes = {

}

export default MovieList

