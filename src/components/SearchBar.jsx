import React, { useState } from "react";
import styles from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Che film vuoi cercare?"
        className={styles.input}
      />
      <button onClick={handleSearch} className={styles.button}>
        Cerca
      </button>
    </div>
  );
}
