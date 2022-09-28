
import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const _KEY = '7b3113adaaaddb4bcf92789694ac9d41';

export const getTrendMovies = async() => {
  try {
      const response = await axios.get(`/trending/movie/week?api_key=${_KEY}`); 
      return response.data;
  }
  catch (error) {
      console.log(error);
  }
};


export const getSearchedMovies = async(query) => {
  try {
      const response = await axios.get(`/search/movie?api_key=${_KEY}&language=en-US&query=${query}&include_adult=false`);       
      return response.data;
  }
  catch (error) {
      console.log(error);
  }
};

export const getMovieDetails = async(movieId) => {
  try {
      const response = await axios.get(`/movie/${movieId}?api_key=${_KEY}&language=en-US`); 
      return response.data;
  }
  catch (error) {
      console.log(error);
  }
};

export const getMovieCredits = async(movieId) => {
  try {
      const response = await axios.get(`/movie/${movieId}/credits?api_key=${_KEY}&language=en-US`); 
      return response.data;
  }
  catch (error) {
      console.log(error);
  }
};

export const getMovieRewiews = async(movieId) => {
  try {
      const response = await axios.get(`/movie/${movieId}/reviews?api_key=${_KEY}&language=en-US`); 
      return response.data;
  }
  catch (error) {
      console.log(error);
  }
};