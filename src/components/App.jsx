import { Cast } from './Cast/Cast';
import { Home } from './Home/Home';
import { MovieDetails } from './MovieDetails/MovieDetails';
import { Movies } from './Movies/Movies';
import { Reviews } from './Reviews/Reviews';
import styled from "styled-components";
import { Routes,Route,NavLink } from "react-router-dom";

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">About</StyledLink>
        <StyledLink to="/products">Products</StyledLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="/movies/:movieId/cast" element={<Cast />} />
        <Route path="/movies/:movieId/reviews" element={<Reviews />} />
      </Routes>

    </div>
  );
};

      // <Home />
      // <Movies />
      // <MovieDetails />
      // <Cats />
      // <Reviews/>
// 7b3113adaaaddb4bcf92789694ac9d41