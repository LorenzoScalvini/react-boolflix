import React from "react";

function MovieList({ movies }) {
  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h3>{movie.title}</h3>
          <p>Titolo Originale: {movie.original_title}</p>
          <p>Lingua: {movie.original_language}</p>
          <p>Voto: {movie.vote_average}</p>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
