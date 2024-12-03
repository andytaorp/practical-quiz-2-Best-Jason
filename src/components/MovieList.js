import React from "react";
import Movie from "./Movie";

 function MovieList({ movies, onToggleWatched, onDeleteMovie }) {
  return (

      <ul>
        {movies.map((movie) => (
          <Movie 
            key={movie.id}
            movie={movie}
            onToggleWatched={onToggleWatched}
            onDeleteMovie={onDeleteMovie}
          />
        ))}
      </ul>

  );
}

export default MovieList;