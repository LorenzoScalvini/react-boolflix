import React from "react";
import styles from "./Card.module.css";

export default function Card({ title, overview, posterPath, voteAverage }) {
  return (
    <div className={styles.card}>
      <img
        src={`https://image.tmdb.org/t/p/w342${posterPath}`}
        alt={title}
        className={styles.image}
      />
      <div className={styles.details}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.overview}>
          {overview.length > 100 ? overview.slice(0, 100) + "..." : overview}
        </p>
        <span className={styles.rating}>⭐ {voteAverage}</span>
      </div>
    </div>
  );
}
