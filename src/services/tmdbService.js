// Configura il servizio API
import axios from "axios";

const API_KEY = "d2af95e0a76b19f795bf9d47f09b48ec";
const BASE_URL = "https://api.themoviedb.org/3";

export const searchMovies = (query) => {
  return axios
    .get(`${BASE_URL}/search/movie`, {
      params: {
        api_key: API_KEY,
        query: query,
        language: "it-IT",
      },
    })
    .then((response) => {
      return response.data.results;
    })
    .catch((error) => {
      console.error("Errore ricerca film:", error);
      return [];
    });
};
