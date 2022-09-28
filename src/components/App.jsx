import { Cast } from './Cast/Cast';
import { Home } from './Home/Home';
import { MovieDetails } from './MovieDetails/MovieDetails';
import { Movies } from './Movies/Movies';
import { Reviews } from './Reviews/Reviews';
import { Routes,Route } from "react-router-dom";
import { StyledLink,Nav } from "./App.styled";
import { useState,useEffect } from "react";
import { getTrendMovies, getMovieDetails,getMovieCredits,getMovieRewiews} from '../apiFilm'
import { NotFoundPage } from "../pages/NotFoundPage/NotFoundPage";



export const App = () => {
  const [array, setArray] = useState([]);
  const [film, setFilm] = useState([]);
  const [id, setId] = useState(0);
  const [cast, setCast] = useState([]);
  const [reviews, setReviews] = useState([]);

  const handlePopularFilm = () => {
    getTrendMovies()
    .then(result => {
        if (result.length === 0) {
          return
        } else {
          setArray(result.results)
        }
      })
      .catch(error => {
        console.log(error)
      });
  }
  
  useEffect(() => {
    handlePopularFilm()
  }, [film]);
  
    

  const handlefilmId = (id) => {
    setId(id)
    getMovieDetails(id)
    .then(result => {
        if (result.length === 0) {
          return
        } else {
          setFilm(result)
        }
      })
      .catch(error => {
        console.log(error)
        if (error.response.status === 404) {
          handlePopularFilm()
        }
      });
    
  }

  const handleCast = () => {
    getMovieCredits(id)
    .then(result => {
        if (result.length === 0) {
          return
        } else {
          setCast(result)
        }
        console.log(result)
      })
      .catch(error => {
        console.log(error)
        if (error.response.status === 404) {
          handlePopularFilm()
        }
      });
  }
  const handleReviews = () => {
    getMovieRewiews(id)
    .then(result => {
        if (result.length === 0) {
          return
        } else {
          setReviews(result)
        }
        console.log(result)
      })
      .catch(error => {
        console.log(error)
        if (error.response.status === 404) {
          handlePopularFilm()
        }
      });
  }
  
  return (
    <div>
      <Nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </Nav>

      <Routes>
        <Route path="/" element={<Home array={array} filmId={handlefilmId} />} />
          <Route path="/movies" element={<Movies />}/>
          <Route path="/movies/:movieId" element={(film.length !== 0 && (<MovieDetails
            film={film}
            handleCast={handleCast}
          handleReviews={handleReviews}
          />))}>
            <Route path="/movies/:movieId/cast" element={<Cast cast={cast}/>}/>
            <Route path="/movies/:movieId/reviews" element={<Reviews reviews={reviews}/>}/>
        </Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>

    </div>
  );
};


// 7b3113adaaaddb4bcf92789694ac9d41