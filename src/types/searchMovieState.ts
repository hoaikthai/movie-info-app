import { MovieModel } from "src/types/movie";

export interface SearchMovieState {
  loading: boolean;
  movies: MovieModel[];
  totalPages: number;
  errorMessages: string[] | null;
}
