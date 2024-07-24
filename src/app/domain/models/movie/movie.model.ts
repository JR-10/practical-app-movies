export interface ResponseMovieModel {
  id?: number;
  original_title?: string;
  original_language?: string;
  overview?: string;
  poster_path?: string;
  release_date?: string;
}


export interface RequestMovieModel {
  page?: number;
}
