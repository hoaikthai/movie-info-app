export interface MovieModel {
  id: number;
  title: string;
  release_date: string;
  original_language: string;
  original_title: string;
  genre_ids: number[];
  adult: boolean;
  overview: string;
  poster_path: string | null;
  popularity: number;
}
