// /trending/get-trending

import { Li,A,Ul,Div } from "./Home.styled";


export const Home = ({ array, filmId }) => {
  

  return (
    <Div>
      <Ul>
        {array.map(({ id, title, backdrop_path }) => (
          <Li  key={id}>
            <A onClick={() => { filmId(id) }} to={`/movies/:${id}`} >
              <img src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
              alt={title} />
              {title}
            </A>
          </Li>
        ))
      }
      </Ul>
    </Div>
  );
};