export type MediaType = 'tv' | 'movie';

export type ListType =
  | 'trending'
  | 'now_playing'
  | 'upcoming'
  | 'airing_today'
  | 'on_the_air'
  | 'popular'
  | 'top_rated';

export type Media = {
  id: number;
  backdrop_path: string;
  media_type: MediaType;
};

export type TvMedia = Media & {
  name: string;
  first_air_date: string;
};

export type MovieMedia = Media & {
  title: string;
  release_date: string;
};

export type MediaList = {
  page: string;
  results: TvMedia[] | MovieMedia[];
};

export function isMovieMedia(media: Media): media is MovieMedia {
  return 'title' in media && 'release_date' in media;
}

export function isTvMedia(media: Media): media is TvMedia {
  return 'name' in media && 'first_air_date' in media;
}

export type MediaDetails = {
  overview: string;
  poster_path: string;
  tagline: string;
  status: string;
  genres: Genre[];
  spoken_languages: { english_name: string }[];
};

export type MovieMediaDetails = MediaDetails & {
  title: string;
  release_date: string;
  runtime: number;
};

export type TvMediaDetails = MediaDetails & {
  name: string;
  first_air_date: string;
  last_air_date: string;
};

export function isMovieMediaDetails(
  media: MediaDetails
): media is MovieMediaDetails {
  return 'title' in media && 'release_date' in media;
}

export function isTvMediaDetails(media: MediaDetails): media is TvMediaDetails {
  return 'name' in media && 'first_air_date' in media;
}

export type Genre = {
  id: number;
  name: string;
};
