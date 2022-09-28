// /movies/get-movie-credits

import { Li } from "components/Home/Home.styled";


export const Cast = ({ cast: { cast } }) => {
  console.log(cast)
  return (
    <ul>
      dkjfnagngkvljnIBNOELRNGINAREOGKLVDSARIGOEHF
      {cast.map(cast => <Li>{cast}</Li>)}
    </ul>
  );
};