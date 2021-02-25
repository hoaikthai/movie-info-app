import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
} from "src/constants/actionTypes";
import { SearchMovieState } from "src/types/searchMovieState";
import {
  FetchMoviesResponse,
  FetchMoviesSuccessResponse,
  FetchMoviesErrorResponse,
} from "src/types/fetchMoviesResponses";

interface SearchMovieAction {
  type: string;
  payload?: FetchMoviesResponse;
}

const searchMovieReducer = (
  state: SearchMovieState,
  action: SearchMovieAction
): SearchMovieState => {
  switch (action.type) {
    case FETCH_MOVIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_MOVIES_SUCCESS: {
      const payload = action.payload as FetchMoviesSuccessResponse;
      return {
        ...state,
        loading: false,
        movies: payload.results,
        totalPages: payload.total_pages,
        errorMessages: null,
      };
    }
    case FETCH_MOVIES_FAILURE: {
      const payload = action.payload as FetchMoviesErrorResponse;
      return {
        ...state,
        loading: false,
        errorMessages: payload.errors,
      };
    }
    default:
      return state;
  }
};

export default searchMovieReducer;
