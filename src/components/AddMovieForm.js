import React, { useState } from "react";
 
function AddMovieForm({ onAddMovie }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;
    
    const newMovie = { 
      id: Date.now(),
      title,
      watched: false


    };

    onAddMovie(newMovie);
    setTitle("");
  };

  return(
    <form className="add-form" onSubmit={handleSubmit}>
      <input 
      type="text" 
      placeholder="Movie Title" 
      value={title} 
      onChange={(e)=>setTitle(e.target.value)}></input>

      <button type="submit">Add Movie</button>
    </form>
  );
}


export default AddMovieForm;