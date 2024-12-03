import React, { useState } from "react";
import AddMovieForm from "./AddMovieForm";
import MovieList from "./MovieList";

function App() {
  const [movies, setMovies] = useState([]);

  function handleAddMovie(newMovie)  {
    setMovies((prevMovies)=>[...prevMovies,newMovie]);
  };

  function handleToggleWatched (id) {
    setMovies((prevMovies)=>
    prevMovies.map((movie) =>
     movie.id === id ? {...movie, watched: !movie.watched} : movie
      )
    );
  };

  function handleDeleteMovie (id) {
    setMovies((prevMovies)=>
    prevMovies.filter((movie)=>movie.id !== id)
    );
  };

  return (
    <div>
      <h1>Favorite Movies</h1>
      
      <MovieList
        movies={movies}
        onToggleWatched={handleToggleWatched}
        onDeleteMovie={handleDeleteMovie}
        />
        <AddMovieForm onAddMovie={handleAddMovie} />
    </div>
  );
}

export default App;
