import React from 'react'
import MovieCard from './MovieCard'

function MovieList({movies}) {
    return (
        <div style={{display:"flex" ,flexWrap:"wrap", marginTop:"20px"}}>
            {movies.map((movie,i) => (
            <MovieCard{...movie} key={i}/>
        ))}
            
        </div>
    )
}

export default MovieList
