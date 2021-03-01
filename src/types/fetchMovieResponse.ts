import { MovieDetail } from "./movieDetail";

// tslint:disable-next-line: no-empty-interface
export interface FetchMovieDetailSuccessResponse extends MovieDetail {}

export interface FetchMovieDetailErrorResponse {
  status_message: string;
  status_code: number;
}

export type FetchMovieDetailResponse =
  | FetchMovieDetailSuccessResponse
  | FetchMovieDetailErrorResponse;
