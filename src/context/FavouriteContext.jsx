import React, { createContext, useContext, useState, useEffect } from "react";

const FavouriteContext = createContext();

export const FavouriteProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  // Load from LocalStorage
  useEffect(() => {
    const storedFavourites = localStorage.getItem("favourites");
    if (storedFavourites) {
      setFavourites(JSON.parse(storedFavourites));
    }
  }, []);

  // Save to LocalStorage
  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  const addToFavourites = (movie) => {
    if (!favourites.some((m) => m.id === movie.id)) {
      setFavourites([...favourites, movie]);
    }
  };

  const removeFromFavourites = (id) => {
    setFavourites(favourites.filter((movie) => movie.id !== id));
  };

  const isFavourite = (id) => {
    return favourites.some((movie) => movie.id === id);
  };

  return (
    <FavouriteContext.Provider
      value={{ favourites, addToFavourites, removeFromFavourites, isFavourite }}
    >
      {children}
    </FavouriteContext.Provider>
  );
};

export const useFavourites = () => useContext(FavouriteContext);