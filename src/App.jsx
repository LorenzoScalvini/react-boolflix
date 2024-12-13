import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MovieProvider } from "./context/MovieProvider";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import styles from "./App.module.css";
import Footer from "./components/Footer";
import Assistenza from "./pages/Assistenza";
import Login from "./pages/Login";

const App = () => {
  return (
    <>
      <MovieProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />{" "}
            <Route path="/movies" element={<Movies />} />{" "}
            <Route path="/assistenza" element={<Assistenza />} />{" "}
            <Route path="/login" element={<Login />} />{" "}
          </Routes>
          <Footer />
        </Router>
      </MovieProvider>
    </>
  );
};

export default App;
