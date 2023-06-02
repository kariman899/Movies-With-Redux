import { API_KEY } from "./constants";
import moviesApi from "./moviesApi";

export const getAllMoviesRequest = async (page) => {
  const movies = await moviesApi.get(
    `/movie/popular?api_key=${API_KEY}&page=${page}`
  );
  return movies;
};

export const getMovieDetailsRequest = async (id) => {
  const movieDetails = await moviesApi.get(
    `/movie/${id}?api_key=${API_KEY}&append_to_response=videos,credits`
  );
  return movieDetails;
};


export const getSearchRequest = async (searchQuery,page) => {
  const searchedMovie = await moviesApi.get(
    `/search/movie?api_key=${API_KEY}&&query=${searchQuery}&page=${page}`
  );

  return searchedMovie;
};
