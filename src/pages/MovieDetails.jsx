import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../utils/axios";
import "./MovieDetails.css";

 function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchMovie() {
      const request = await axios.get(
        `/movie/${id}?api_key=46ab00c25bc1ed30464b93c8ef77ce7c&language=en-US`
      );
      setMovie(request.data);
    }
    fetchMovie();
  }, [id]);

  if (!movie) return <h2 style={{ color: "white", textAlign: "center" }}>Loading...</h2>;

  return (
    <div className="details">
      <img
        className="details_backdrop"
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        alt={movie.title}
      />
      <div className="details_content">
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
        <p><strong>Release Date:</strong> {movie.release_date}</p>
        <p><strong>Rating:</strong> {movie.vote_average} / 10</p>
      </div>
    </div>
  );
}
export default MovieDetails