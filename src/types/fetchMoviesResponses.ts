import { MovieModel } from "./movie";

export interface FetchMoviesSuccessResponse {
  page: number;
  total_results: number;
  total_pages: number;
  results: MovieModel[];
}

export interface FetchMoviesErrorResponse {
  errors: string[];
}

export type FetchMoviesResponse =
  | FetchMoviesSuccessResponse
  | FetchMoviesErrorResponse;
