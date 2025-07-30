// import React from "react";
// import "./MovieCard.css";

// export default function MovieCard({ movie }) {
//   const base_url = "https://image.tmdb.org/t/p/original/";
//   return (
//     <div className="movieCard">
//       <img
//         src={$`{base_url}${movie.poster_path}`}
//         alt={movie.title || movie.name}
//         className="movieCard_img"
//       />
//       <div className="movieCard_info">
//         <h3>{movie.title || movie.name}</h3>
//         <p>{movie.overview.slice(0, 100)}...</p>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { useFavourites } from "../context/FavouriteContext";
import "./MovieCard.css";

export default function MovieCard({ movie }) {
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
        {isFavourite(movie.id) ? "❤" : "🤍"}
      </button>
    </div>
  );
}