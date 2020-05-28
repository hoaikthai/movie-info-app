import {
  SEARCH_MOVIE_REQUEST,
  SEARCH_MOVIE_SUCCESS,
  SEARCH_MOVIE_FAILURE,
} from "constants/actionTypes";

const searchMovieReducer = (state, action) => {
  switch (action.type) {
    case SEARCH_MOVIE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SEARCH_MOVIE_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.payload.results,
        page: action.payload.page,
        totalPage: action.payload.total_pages,
      };
    case SEARCH_MOVIE_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessages: action.payload.errors
      }
    default:
      return state;
  }
};

export default searchMovieReducer;
