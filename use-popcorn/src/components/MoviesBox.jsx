import React from "react";
import Movie from "./Movie";

function MoviesBox({ movies, onSelectMovie }) {
  return (
    <ul className="list">
      {movies.map((movie) => (
        <Movie key={movie.imdbID} movie={movie} onSelectMovie={onSelectMovie} />
      ))}
    </ul>
  );
}

export default MoviesBox;
