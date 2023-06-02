import { getAllMoviesRequest, getMovieDetailsRequest ,getSearchRequest } from "./Requests";
import {
  ERROR,
  ERROR_DETAILS,
  ERROR_SEARCH,
  FETCH_MOVIE_DETAILS,
  FETCH_MOVIES_DATA,
  FETCH_SEARCH,
  LOADING,
  LOADING_DETAILS,
  LOADING_SEARCH,
} from "./Types";

export const getAllMovies = (page) => {
  return async (dispatch) => {
    try {
      dispatch({ type: LOADING });
      const allMovies = await getAllMoviesRequest(page);
      dispatch({
        type: FETCH_MOVIES_DATA,
        payload: allMovies?.data?.results,
        // payload: allMovies?.data,

      });
      //GET PAGES TOTAL
      // console.log(allMovies?.data)
      
    } catch (error) {
      dispatch({ type: ERROR, payload: error?.status_message });
    }
  };
};

export const getMovieDetails = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: LOADING_DETAILS });
      const Movie = await getMovieDetailsRequest(id);
      dispatch({
        type: FETCH_MOVIE_DETAILS,
        payload: Movie?.data,
      });
    } catch (error) {
      dispatch({ type: ERROR_DETAILS, payload: error?.status_message });
    }
  };
};


export const getSearch = (searchQuery,page) => {
  return async (dispatch) => {
    try {
      dispatch({ type: LOADING_SEARCH });
      const searchedMovies = await getSearchRequest(searchQuery,page);
      dispatch({
        type: FETCH_SEARCH,
        payload: searchedMovies?.data?.results,
      });
    } catch (error) {
      dispatch({ type: ERROR_SEARCH, payload: error?.status_message });
    }
  };
};