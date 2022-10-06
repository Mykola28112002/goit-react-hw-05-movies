// /movies/get-movie-credits

import { Ul,Img,Li,Title } from "./Cast.styled";
import { useParams } from 'react-router-dom';
import { getMovieCast } from '../../apiFilm';
import { useState, useEffect } from 'react';

const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState({});

  useEffect(() => {
    async function getFilm() {
      try {
        const film = await getMovieCast(id);
        const acting = film.cast
        setCast(acting);
        return;
      } catch (error) {
        console.log(error);
      }
    }
    getFilm();
  }, [id]);
  
  return (
    <Ul>
      {cast.length !== undefined && cast.map(({id,name,profile_path}) =>
        <Li key={id}>
          <Img src={`https://image.tmdb.org/t/p/w500${profile_path}`} alt="" />
          <Title>{name}</Title>
        </Li>)}
    </Ul>
  );
};

export default Cast;
