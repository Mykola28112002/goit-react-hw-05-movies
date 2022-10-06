// /movies/get-movie-details 

import { Suspense } from 'react';
import { useParams, Outlet,  } from 'react-router-dom';
import { getMovieDetails } from '../../apiFilm';
import { useState, useEffect } from 'react';
import {Div, Container, Info, A,Nav} from './MovieDetails.styled';

export const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

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
      <Div>
        <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
        <Info>
          <h2>{title}</h2>
          {tagline && <span>"{tagline}"</span>}
          <h3>Overview</h3> <p>{overview}</p>
          <Nav>
            <A to="cast">Cast</A>
            <A to="reviews">Reviews</A>
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