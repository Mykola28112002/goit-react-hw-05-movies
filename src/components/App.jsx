import { Routes,Route } from "react-router-dom";
import { NotFoundPage } from "../pages/NotFoundPage/NotFoundPage";
import { useState, useEffect, lazy } from 'react';
import { getTrendMovies } from '../apiFilm';
import Layout from '../pages/Layout/Layout';

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const Movies = lazy(() => import("./Movies/Movies"));
const MovieDetails = lazy(() => import("../pages/MovieDetails/MovieDetails"));
const Reviews = lazy(() => import("./Reviews/Reviews"));
const Cast = lazy(() => import("./Cast/Cast"));

export const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      try {
        const data = await getTrendMovies();
        const trendieMovies = data.results;
        setMovies(trendieMovies);
        return;
      } catch (error) {
        console.log(error);
      }
    }

    getMovies();
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage movies={movies}/>} />
          <Route path="movies" element={<Movies/>} />
          <Route path="movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </div>
  );
};


