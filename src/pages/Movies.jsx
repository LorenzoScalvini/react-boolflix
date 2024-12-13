import React, { useContext } from "react";
import { MovieContext } from "../context/MovieProvider";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";
import styles from "./Movies.module.css";

const Movies = () => {
  const { movies, tvShows, searchMoviesAndTvShows } = useContext(MovieContext);

  return (
    <div className={styles.container}>
      <h1>Popular Movies & TV Shows</h1>
      <SearchBar onSearch={searchMoviesAndTvShows} />

      <div>
        <div className={styles.movieList}>
          {movies.length === 0 ? (
            <p className={styles.noResults}>No movies found...</p>
          ) : (
            movies.map((movie) => (
              <MovieCard key={movie.id} item={movie} type="movie" />
            ))
          )}
        </div>
      </div>

      <div>
        <div className={styles.movieList}>
          {tvShows.length === 0 ? (
            <p className={styles.noResults}>No TV shows found...</p>
          ) : (
            tvShows.map((show) => (
              <MovieCard key={show.id} item={show} type="tv" />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Movies;
