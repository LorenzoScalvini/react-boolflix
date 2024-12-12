import React from "react";
import styles from "./MovieList.module.css";

export default function MovieList({ movies }) {
  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <div key={movie.id} className={styles.movieCard}>
          <img
            src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
            alt={movie.title}
            className={styles.movieImage}
          />
          <h3>{movie.title}</h3>
          <p>Titolo Originale: {movie.original_title}</p>
          <p>Lingua: {movie.original_language}</p>
          <p>Voto: {movie.vote_average}</p>
        </div>
      ))}
    </div>
  );
}
