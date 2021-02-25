import { Dispatch } from "react";

import MovieApi from "src/constants/movieApi";
import HttpStatus from "src/constants/httpStatus";
import {
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  FETCH_MOVIES_REQUEST,
} from "src/constants/actionTypes";
import { FetchMoviesResponse } from "src/types/fetchMoviesResponses";
import genres from "src/data/genres.json";

interface FetchMoviesInput {
  query?: string | null;
  page: string | null;
  endpoint: string;
  dispatch: Dispatch<{ type: string; payload?: FetchMoviesResponse }>;
}

export const fetchMovies = async ({
  endpoint,
  query,
  page,
  dispatch
}: FetchMoviesInput) => {
  dispatch({ type: FETCH_MOVIES_REQUEST });
  let queryParams = `page=${page}&api_key=${MovieApi.KEY}`;
  if (query) {
    queryParams += `&query=${query}`;
  }
  const response: Response = await fetch(
    `${MovieApi.HOST + endpoint}?${queryParams}`
  );
  const jsonResponse: FetchMoviesResponse = await response.json();
  dispatch({
    type:
      response.status === HttpStatus.OK ? FETCH_MOVIES_SUCCESS : FETCH_MOVIES_FAILURE,
    payload: jsonResponse,
  });
};

export const mapIdToGenre = (genreIds: number[]): string[] => {
  const genreNames: string[] = genres
    .filter((genreItem) => genreIds.includes(genreItem.id))
    .map((genreItem) => genreItem.name);
  return genreNames;
};
