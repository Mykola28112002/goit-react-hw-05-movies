import Cast from './Cast/Cast';
import MovieDetails from '../pages/MovieDetails/MovieDetails';
import Movies from './Movies/Movies';
import Reviews from './Reviews/Reviews';
import { Routes,Route } from "react-router-dom";
import { NotFoundPage } from "../pages/NotFoundPage/NotFoundPage";
import HomePage from "../pages/HomePage/HomePage";
import { Link ,Header} from "./App.styled";


export const App = () => {

  return (
    <div>
      <Header>
        <nav>
          <Link to="/" end>Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/movies" element={<Movies/>}/>
        <Route path="/movies/:id" element={<MovieDetails/>}>
          <Route path="cast" element={<Cast/>}/>
          <Route path="reviews" element={<Reviews/>}/>
        </Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </div>
  );
};


