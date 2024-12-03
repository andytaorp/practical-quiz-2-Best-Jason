import React from "react";


function Movie({movie, onDeleteMovie,onToggleWatched  }) {
    return (
    <li>
      <input 
      type="checkbox"  //check box  //checked="checkbox" to turn it to true/false
      checked={movie.watched} 
      onChange={()=>onToggleWatched(movie.id)}
      />
      
      <span 
      style = {
        movie.watched ? {textDecoration:"line-through"} 
        : {}
        }
        >
         {movie.title} 
         </span>
         <button onClick={()=>onDeleteMovie(movie.id)}>Delete</button>
         </li>
  );
}

export default Movie;
