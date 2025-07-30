// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import MovieDetails from "./pages/MovieDetails";
import FavouriteList from "./pages/FavouriteList";
import { AuthProvider } from "./context/AuthContext";
import { FavouriteProvider } from "./context/FavouriteContext";


import ProtectedRoute from "./routes/ProtectedRoute";




function App() {
  return (


    <Router>
      <AuthProvider>
        <FavouriteProvider>
          <Routes>
            <Route path="/login" element={<Login />} />

          
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/movie/:id"
              element={
                <ProtectedRoute>
                  <MovieDetails />
                </ProtectedRoute>
              }
            />
            <Route
              path="/favourites"
              element={
                <ProtectedRoute>
                  <FavouriteList />
                </ProtectedRoute>
              }
            />
          </Routes>
        
        </FavouriteProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;