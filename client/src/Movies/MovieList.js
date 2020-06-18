import React from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

function MovieList(props) {
 const { movies} = props.movies;
 const { setRefresh} = props.setRefresh;
  return (
    <div className="movie-list">
      {
        movies.map(movie => (
          <Link key={movie.id} to={`/movies/${movie.id}`}>
            <MovieCard movie={movie} setRefresh={setRefresh} />
          </Link>
        ))
      }
    </div>
  );
}

export default MovieList;
