//Configura la struttura base dello stato
import { useState } from "react";

function useMovieStore() {
  const [movies, setMovies] = useState([]);
  const [tvShows, setTvShows] = useState([]);
  const [searchQuery, setSearchQuery] = useState([]);

  return {
    movies,
    setMovies,
    tvShows,
    setTvShows,
    searchQuery,
    setSearchQuery,
  };
}
