import { Routes,Route } from "react-router-dom";
import { NotFoundPage } from "../pages/NotFoundPage/NotFoundPage";
import Layout from '../pages/Layout/Layout';
import { lazy } from 'react';

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const Movies = lazy(() => import("./Movies/Movies"));
const MovieDetails = lazy(() => import("../pages/MovieDetails/MovieDetails"));
const Reviews = lazy(() => import("./Reviews/Reviews"));
const Cast = lazy(() => import("./Cast/Cast"));

export const App = () => {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage/>} />
          <Route path="movies" element={<Movies/>} />
          <Route path="movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
           <Route path="*" element={<NotFoundPage />}></Route>
        </Route>
      </Routes>
    </div>
  );
};


