import { SearchMovieState } from "src/types/searchMovieState";

export const initialState: SearchMovieState = {
  loading: false,
  movies: [],
  totalPages: 0,
  errorMessages: null,
};
