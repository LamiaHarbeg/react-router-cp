import React, { useState} from "react";
import {  Switch, Route } from "react-router-dom";
import {InputGroup, FormControl} from "react-bootstrap";
import "./App.css";

import {moviesData} from "./component/MoviesData";
import Add from "./component/Add";
import Footer from "./component/Footer";
import MovieList from "./component/MovieList";
import Rating from "./component/Rating"
import NotFound from "./component/NotFound"
import DiscoverMovie from "./component/DiscoverMovie"

function App() {
  const [movies,setMovies] = useState (moviesData);
  let [search,setSearch] = useState("");
  let [searchRate,setSearchRate] = useState(0);

const rateFilter = (e) => {
    setSearchRate(e)
  }

 

const addMovie =(x)=>setMovies([...movies, x]);



  return (
  
    <div className="App">
        <Switch>    
          <Route path="/" exact component={App}>  
      <div> 
    <InputGroup size="lg" >
    <FormControl placeholder="filter by Title" onChange={e => setSearch(e.target.value)} aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
    </InputGroup>
        <Rating   rateFilter={rateFilter}/>       
        </div>
          <MovieList  movies={movies.filter(movie => movie.title.toLowerCase().includes(search.toLowerCase().trim()) && movie.rate >= searchRate )} />
          <Add addMovie={addMovie} />
      <Footer/>
      </Route>   
  <Route path="/:Discover_movie"  movies={movies} render={(props)=><DiscoverMovie movies={movies}/>}/>
       <Route component={NotFound} default/>  
             </Switch>
  </div>
  )
}

export default App;
