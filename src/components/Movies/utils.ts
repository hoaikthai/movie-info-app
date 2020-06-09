import { Dispatch } from "react";

import { MOVIE_API_KEY, SEARCH_MOVIE_API_URL } from "src/constants/movieApi";
import {
  SEARCH_MOVIE_SUCCESS,
  SEARCH_MOVIE_FAILURE,
  SEARCH_MOVIE_REQUEST,
} from "src/constants/actionTypes";
import { FetchMoviesResponse } from "src/types/fetchMoviesResponses";
import { SUCCESS } from "src/constants/httpStatusCodes";

interface FetchMoviesInput {
  query: string | null;
  page: string | null;
  dispatch: Dispatch<{type: string, payload?: FetchMoviesResponse}>;
}

export const fetchMovies = async ({ query, page, dispatch }: FetchMoviesInput) => {
  dispatch({ type: SEARCH_MOVIE_REQUEST });
  const response: Response = await fetch(
    `${SEARCH_MOVIE_API_URL}?query=${query}&page=${page}&api_key=${MOVIE_API_KEY}`
  );
  const jsonResponse: FetchMoviesResponse = await response.json();
  dispatch({
    type: response.status === SUCCESS ? SEARCH_MOVIE_SUCCESS : SEARCH_MOVIE_FAILURE,
    payload: jsonResponse,
  });
};
