import React, { useEffect, useContext } from "react";
import { MovieContext } from "../context/MovieProvider";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";
import styles from "./Movies.module.css";

const Movies = () => {
  const { movies, searchMovies } = useContext(MovieContext);

  return (
    <div className={styles.container}>
      <h1>Popular Movies</h1>
      <SearchBar onSearch={searchMovies} />
      <div className={styles.movieList}>
        {movies.length === 0 ? (
          <p className={styles.noResults}>Nessun film trovato...</p>
        ) : (
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        )}
      </div>
    </div>
  );
};

export default Movies;
