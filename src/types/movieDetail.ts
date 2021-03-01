import { MovieModel } from "./movie";

export enum MovieStatus {
  Rumored = "Rumored",
  Planned = "Planned",
  InProduction = "In Production",
  PostProduction = "Post Production",
  Released = "Released",
  Canceled = "Canceled",
}

export interface MovieDetail extends MovieModel {
  genres: {
    id: number;
    name: string;
  }[];
  backdrop_path: string | null;
  budget: number;
  homepage: string | null;
  imdb_id: string | null;
  production_companies: {
    id: number;
    name: string;
    logo_path: string | null;
    origin_country: string;
  }[];
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
  revenue: number;
  runtime: number | null;
  spoken_languages: {
    iso_639_1: string;
    name: string;
  }[];
  status: MovieStatus;
  tagline: string | null;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
