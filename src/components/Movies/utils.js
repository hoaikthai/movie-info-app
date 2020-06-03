import { MOVIE_API_KEY, SEARCH_MOVIE_API_URL } from "constants/movieApi";
import {
  SEARCH_MOVIE_SUCCESS,
  SEARCH_MOVIE_FAILURE,
  SEARCH_MOVIE_REQUEST,
} from "constants/actionTypes";

export const fetchMovies = async ({ query, page, dispatch }) => {
  dispatch({ type: SEARCH_MOVIE_REQUEST });
  const response = await fetch(
    `${SEARCH_MOVIE_API_URL}?query=${query}&page=${page}&api_key=${MOVIE_API_KEY}`
  );
  const jsonResponse = await response.json();
  dispatch({
    type: jsonResponse.results ? SEARCH_MOVIE_SUCCESS : SEARCH_MOVIE_FAILURE,
    payload: jsonResponse,
  });
};
