import React from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.heroContainer}>
      <h1 className={styles.heroTitle}>TUTTI I FILM IN UNA WEB-APP</h1>
      <button className={styles.heroButton}>Inizia a guardare!</button>
    </div>
  );
}
