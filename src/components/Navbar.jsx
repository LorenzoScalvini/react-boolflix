import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <a href="#">BOOLFLIX</a>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Serie TV</a>
        </li>
        <li>
          <a href="#">Film</a>
        </li>
        <li>
          <a href="#">Nuove</a>
        </li>
        <li>
          <a href="#">La mia lista</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
