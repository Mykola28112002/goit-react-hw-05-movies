// /movies/get-movie-reviews 
// import { } from "./Reviews.styled";
import { useParams } from 'react-router-dom';
import { getMovieRewiews } from '../../apiFilm';
import { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';


export const Reviews = () => {
  
  const { id } = useParams();
  const [rewiews, setRewiews] = useState({});

  useEffect(() => {
    async function getFilm() {
      try {
        const film = await getMovieRewiews(id);
        
        const acting = film.results;
        
        setRewiews({acting}.acting);
        return;
      } catch (error) {
        console.log(error);
      }
    }
    getFilm();
  }, [id]);
  if (rewiews.length !== undefined) {
    
    return (
      <div>
        { rewiews.map(({author,content}) => <div key={author}>
            <h3>{author}</h3>
            <p>{content }</p>
          </div>) 
          }
      </div>
    
  );
  } else {
    return 
  }
  
};

export default Reviews;

Reviews.propTypes = {
  author: PropTypes.string,
  content: PropTypes.string
};