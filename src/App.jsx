import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { searchMovies, searchTvShows } from "./services/tmdbService";
import styles from "./App.module.css";

export default function App() {
  const [results, setResults] = useState([]);

  const handleSearch = async (query) => {
    const movies = await searchMovies(query);
    const tvShows = await searchTvShows(query);
    const filteredResults = [...movies, ...tvShows].filter(
      (item) => item.poster_path
    );
    setResults(filteredResults);
  };

  return (
    <>
      <div className={styles.container}>
        <header>
          <Navbar />
          <SearchBar onSearch={handleSearch} />
        </header>
        <div className={styles["results-grid"]}>
          {results.map((item) => (
            <Card
              key={item.id}
              title={item.title || item.name}
              overview={item.overview}
              posterPath={item.poster_path}
              voteAverage={item.vote_average}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
