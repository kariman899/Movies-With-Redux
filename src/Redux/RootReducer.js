import {
  ERROR,
  ERROR_DETAILS,
  ERROR_SEARCH,
  FETCH_MOVIES_DATA,
  FETCH_MOVIE_DETAILS,
  FETCH_SEARCH,
  LOADING,
  LOADING_DETAILS,
  LOADING_SEARCH,
} from "./Types";

const initialState = {
  data: [],
  error: "",
  loading: false,

  MovieDetails: {},
  errorDetails: "",
  loadingDetails: false,


  searchedMovie: [],
  errorSearch: "",
  loadingSearch: false,

};

const reducer = (state = initialState, { type, payload }) => {
  let data;
  switch (type) {
    case LOADING:
      data = { ...state, loading: true };
      break;
    case FETCH_MOVIES_DATA:
      data = { ...state, data: payload, loading: false };
      break;
    case ERROR:
      data = { ...state, error: payload, loading: false };
      break;

    /**details */
    case LOADING_DETAILS:
      data = { ...state, loadingDetails: true };
      break;
    case FETCH_MOVIE_DETAILS:
      data = { ...state, MovieDetails: payload, loadingDetails: false };
      break;
    case ERROR_DETAILS:
      data = { ...state, errorDetails: payload, loadingDetails: false };
      break;

      /**search */
    case LOADING_SEARCH:
      data = { ...state, loadingSearch: true };
      break;
    case FETCH_SEARCH:
      data = { ...state, searchedMovie: payload, loadingSearch: false };
      break;
    case ERROR_SEARCH:
      data = { ...state, errorSearch: payload, loadingSearch: false };
      break;

    default:
      data = { ...state };
      break;
  }
  return data;
};
export default reducer;
