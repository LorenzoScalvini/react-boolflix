import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { API_KEY, BASE_URL } from "../utils/api";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [tvShows, setTvShows] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchMoviesAndTvShows = () => {
    // Fetching dei film popolari
    axios
      .get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
      .then((response) => setMovies(response.data.results))
      .catch((error) => console.error("Error fetching movies:", error));

    // Fetching dei TvShows popolari
    axios
      .get(`${BASE_URL}/tv/popular?api_key=${API_KEY}`)
      .then((response) => setTvShows(response.data.results))
      .catch((error) => console.error("Error fetching TV shows:", error));
  };

  const searchMoviesAndTvShows = (query) => {
    setSearchQuery(query);
    // Search per i film
    axios
      .get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`)
      .then((response) => setMovies(response.data.results))
      .catch((error) => console.error("Error searching movies:", error));

    // Search pe i tv shows
    axios
      .get(`${BASE_URL}/search/tv?api_key=${API_KEY}&query=${query}`)
      .then((response) => setTvShows(response.data.results))
      .catch((error) => console.error("Error searching TV shows:", error));
  };

  useEffect(() => {
    if (!searchQuery) {
      fetchMoviesAndTvShows();
    }
  }, [searchQuery]);

  return (
    <MovieContext.Provider value={{ movies, tvShows, searchMoviesAndTvShows }}>
      {children}
    </MovieContext.Provider>
  );
};
