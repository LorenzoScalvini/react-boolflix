import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import { searchMovies, searchTvShows } from "./services/tmdbService";

function App() {
  const [results, setResults] = useState([]);

  const handleSearch = async (query) => {
    const movies = await searchMovies(query);
    const tvShows = await searchTvShows(query);
    setResults([...movies, ...tvShows]);
  };

  return (
    <div>
      <header>
        <h1>Boolflix</h1>
        <SearchBar onSearch={handleSearch} />
      </header>
      <div className="results-grid">
        {results.map((item) => (
          <div
            key={item.id}
            className="media-card"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w342${item.poster_path})`,
            }}
          >
            <div className="hover-details">
              <h3>{item.title || item.name}</h3>
              <p>{item.overview}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
