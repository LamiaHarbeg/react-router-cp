import React from 'react'
import {Link,  useLocation} from 'react-router-dom'
import ReactPlayer from "react-player";
import './DiscoverMovie.css'
import { moviesData } from './MoviesData';
 
const  MovieDetails = ({movies}) => {
    let location = useLocation()
    let movieTitle = location.pathname.toLocaleLowerCase().split('').slice(1).join('')
    let movie = movies.find((p) => p.title.toLocaleLowerCase() === movieTitle);
         let movieTrailer = (       
            <ReactPlayer url={movie.trailerUrl} controls/>
          );
                  return (
            <>
            <section className="main-container">
                    <div  className="movie-trailer">
                  {movieTrailer}
                    </div>
          <br/>
                  <h3>{movie.title}</h3>
          <p >{movie.description}</p>
          </section>
                  <Link to="/">
            <button >Back to Home</button>
            </Link>
           
        </>
    );
}
export default MovieDetails;