import React from "react";
import styles from "./MovieCard.module.css";

export default function MovieCard({ movie }) {
  // Get the language (original_language) from the movie data
  const language = movie.original_language.toUpperCase();

  return (
    <div className={styles.card}>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className={styles.cardImage}
      />
      <div className={styles.rating}>
        <span>Rating: {movie.vote_average.toFixed(1)} / 10</span>
      </div>
      <div className={styles.cardContent}>
        <h3>{movie.title}</h3>
        <p>{movie.overview}</p>
        <div className={styles.language}>
          <span>Language: {language}</span>
        </div>
      </div>
    </div>
  );
}
