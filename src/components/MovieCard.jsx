import React from "react";
import styles from "./MovieCard.module.css";

export default function MovieCard({ item, type }) {
  const title = type === "movie" ? item.title : item.name;
  const language = item.original_language.toUpperCase();

  const posterUrl = item.poster_path
    ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
    : "https://via.placeholder.com/500x750?text=No+Image";

  return (
    <div className={styles.card}>
      <img src={posterUrl} alt={title} className={styles.cardImage} />
      <div className={styles.rating}>
        <span>Rating: {item.vote_average.toFixed(1)} / 10</span>
      </div>
      <div className={styles.cardContent}>
        <h3>{title}</h3>
        <p>{item.overview || "Nessuna overview disponibile..."}</p>
        <div className={styles.language}>
          <span>Language: {language}</span>
          <span> | Type: {type === "movie" ? "Movie" : "TV Show"}</span>
        </div>
      </div>
    </div>
  );
}
