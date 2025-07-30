// src/pages/FavouriteList.jsx
import React from "react";
import Navbar from "../components/Navbar";
import { useFavourites } from "../context/FavouriteContext";
import MovieCard from "../components/MovieCard";
import "./FavouriteList.css";

 function FavouriteList() {
  const { favourites } = useFavourites();

  return (
    <>
      <Navbar />
      <div className="favouriteList">
        <h2 className="favourite-heading">My Favourites</h2>

        <div className="favouriteGrid">
          {favourites.length > 0 ? (
            favourites.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))
          ) : (
            <p className="no-fav">No favourites added yet.</p>
          )}
        </div>
      </div>
    </>
  );
}
export default FavouriteList