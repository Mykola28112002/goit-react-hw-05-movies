
import { useState, useEffect } from 'react';
import Home from '../../components/Home/Home';
import { getTrendMovies } from '../../apiFilm';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      try {
        const data = await getTrendMovies();
        const trendieMovies = data.results;
        setMovies(trendieMovies);
        return;
      } catch (error) {
        console.log(error);
      }
    }

    getMovies();
  }, []);

  return (
    <div>
      <Home movies={movies} />
    </div>
  );
};

export default HomePage;