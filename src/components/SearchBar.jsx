import React, { useState } from "react";
import axios from "../utils/axios";
import "./SearchBar.css";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (query.trim() === "") return;

    const request = await axios.get(
      `/search/movie?api_key=46ab00c25bc1ed30464b93c8ef77ce7c&query=${query}`
    );
    setMovies(request.data.results);
  };

  return (
    <div className="searchbar">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for a movie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <div className="search_results">
        {movies.map((movie) => (
          <div key={movie.id} className="search_item">
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
            />
            <p>{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}










// import React, { useState } from "react";
// import axios from "../utils/axios";
// import "./SearchBar.css";

// export default function SearchBar() {
//   const [query, setQuery] = useState("");
//   const [movies, setMovies] = useState([]);

//   const handleSearch = async (e) => {
//     e.preventDefault();
//     if (query.trim() === "") return;

//     const request = await axios.get(
//       `/search/movie?api_key=46ab00c25bc1ed30464b93c8ef77ce7c&query=${query}`
//     );
//     setMovies(request.data.results);
//   };

//   return (
//     <div className="searchbar">
//       <form onSubmit={handleSearch}>
//         <input
//           type="text"
//           placeholder="Search for a movie..."
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//         />
//         <button type="submit">Search</button>
//       </form>

//       <div className="search_results">
//         {movies.map((movie) => (
//           <div key={movie.id} className="search_item">
//             <img
//               src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
//               alt={movie.title}
//             />
//             <p>{movie.title}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }