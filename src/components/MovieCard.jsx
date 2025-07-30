import React from "react";
import { useFavourites } from "../context/FavouriteContext";
import "./MovieCard.css";

function MovieCard({ movie }) {
  const { addToFavourites, removeFromFavourites, isFavourite } = useFavourites();

  const handleToggleFavourite = () => {
    if (isFavourite(movie.id)) {
      removeFromFavourites(movie.id);
    } else {
      addToFavourites(movie);
    }
  };

  return (
    <div className="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title}
      />
      <button className="heart-icon" onClick={handleToggleFavourite}>
        {isFavourite(movie.id) ? "❤️" : "🤍"}
      </button>
    </div>
  );
}
export default MovieCard