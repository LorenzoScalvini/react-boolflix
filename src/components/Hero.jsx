import React from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.heroContainer}>
      <h1 className={styles.heroTitle}>
        Scopri il Mondo del Cinema e delle Serie TV
      </h1>
      <p className={styles.heroDescription}>
        Entra in un universo ricco di emozioni, avventure e storie
        indimenticabili. Esplora le ultime novità, i tuoi film preferiti e le
        serie più acclamate, tutto in un unico posto.
      </p>
      <button className={styles.heroButton}>Inizia a guardare!</button>
    </div>
  );
}
