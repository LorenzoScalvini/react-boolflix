import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import userIcon from "../assets/images/userpfp.jpg";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div>
        <h2 className={styles.logo}>BOOLFLIX</h2>
      </div>
      <div>
        <ul>
          <li>
            <Link to="/" className={styles.link}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/movies" className={styles.link}>
              Film & Serie
            </Link>
          </li>
          <li>
            <Link to="/assistenza" className={styles.link}>
              Assistenza
            </Link>
          </li>
          <li>
            <Link to="/login" className={styles.link}>
              Accedi
            </Link>
          </li>
          <li>
            <img className={styles.icon} src={userIcon} alt="" />
          </li>
        </ul>
      </div>
    </nav>
  );
}
