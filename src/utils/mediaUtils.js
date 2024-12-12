export const getPosterUrl = (posterPath, size = "w342") => {
  return posterPath
    ? `https://image.tmdb.org/t/p/${size}${posterPath}`
    : "default-poster.jpg";
};

export const convertRatingToStars = (rating) => {
  return Math.ceil(rating / 2);
};
