

import { PropTypes } from 'prop-types';
import { useLocation } from 'react-router-dom';
import { Li,A,Ul } from "./Home.styled";

const Home = ({ movies }) => {
  const location = useLocation();
  
  return (
    <Ul>
      {movies.map(({ poster_path, id, title }) => (
        <Li key={id}>
          <A to={`/movies/${id}`} state={{ from: location }}>
            <img
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={title}
            />
            <h2>{title}</h2>
          </A>
        </Li>
      ))}
    </Ul>
  );
};

export default Home;

Home.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      poster_path: PropTypes.string,
      title: PropTypes.string,
    })
  ).isRequired,
};