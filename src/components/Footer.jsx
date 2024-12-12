import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p className={styles.text}>© 2024 Boolflix, Inc.</p>
        <div className={styles.links}>
          <a href="#">Termini di utilizzo</a>
          <a href="#">Privacy</a>
          <a href="#">Cookie</a>
        </div>
      </div>
    </footer>
  );
}
