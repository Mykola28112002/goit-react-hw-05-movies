// /movies/get-movie-details 

import { Suspense } from 'react';
import { useParams, Outlet, useLocation  } from 'react-router-dom';
import { getMovieDetails } from '../../apiFilm';
import { useState, useEffect } from 'react';
import { Div, Container, Info, A, Nav, Link } from './MovieDetails.styled';
import { PropTypes } from 'prop-types';


export const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const location = useLocation();
  const goBack = location.state?.from ?? '/';

  useEffect(() => {
    async function getFilm() {
      try {
        const film = await getMovieDetails(id);
        setMovie(film);
        return;
      } catch (error) {
        console.log(error);
      }
    }
    getFilm();
  }, [id]);

  const { poster_path, title, overview, tagline } = movie;

  return (
    <Container>
      <Link to={goBack}> Go back</Link>
      <Div>
        
        <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
        <Info>
          <h2>{title}</h2>
          {tagline && <span>"{tagline}"</span>}
          <h3>Overview</h3> <p>{overview}</p>
          <Nav>
            <A to="cast" state={{ from: location.state.from }}>Cast</A>
            <A to="reviews" state={{ from: location.state.from }}>Reviews</A>
          </Nav>
        </Info>
      </Div>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
   </Container>
  );
};

export default MovieDetails;

MovieDetails.propTypes = {
  poster_path: PropTypes.string,
  overview: PropTypes.string,
  tagline: PropTypes.string,
  title: PropTypes.string
};