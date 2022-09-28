// /movies/get-movie-details 
import { NavLink } from "react-router-dom";


export const MovieDetails = ({ film,handleCast,handleReviews }) => {
  const { genres, overview, poster_path, release_date, original_title, vote_average } = film;
  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={original_title} />
      <h2>{original_title}<span>({release_date})</span></h2>
      <p>User Score: {vote_average }</p>
      <h3>Overview</h3> <p>{overview}</p>
      <h3>Genres</h3>
      {genres !== undefined && (genres.map(({ name }) => <span key={name}>{name}</span>))}
      <NavLink  to="/movies/:movieId/cast" onClick={handleCast}>Cast</NavLink>
      <NavLink onClick={handleReviews} to="/movies/:movieId/reviews">Reviews</NavLink>
      
    </div>
  );
};
