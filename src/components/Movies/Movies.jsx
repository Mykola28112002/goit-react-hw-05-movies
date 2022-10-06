
import { getSearchedMovies } from '../../apiFilm';
import { Formik, } from 'formik';
import { Search,SearchForm,SearchField,Button } from './Movies.styled';
import { useState } from "react";
import Home from '../Home/Home';


function Movies() {
  const [name, setName] = useState('');
  const [movies, setMovies] = useState('');
  
  const handelSabmit = (values, { resetForm }) => { 
      if (values.name !== '') { 
          setName(values.name)
        resetForm();
      async function getMovies() {
        try {
          const data = await getSearchedMovies(name);
          const trendieMovies = data.results;
          setMovies(trendieMovies);
          return;
        } catch (error) {
          alert('Not found')
          console.log(error);
        }
      }
      getMovies();
      }
  };
  
  return (<div>
      <Search className="searchbar">
        <Formik
            initialValues={{name}}
            onSubmit={handelSabmit}>
            <SearchForm className="form" >
                <Button type="submit" className="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" 
                        viewBox="0 0 16 16">
                        <path
                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                </Button>
                <SearchField
                    className="input"
                    type="text"
                    name="name"
                    placeholder="Search images and photos"
                />
            </SearchForm>
      </Formik>
    </Search>
    {movies !== '' && <Home movies={movies} />}
    </div>)
    
};

export default Movies;