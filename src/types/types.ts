export type MediaType = 'tv' | 'movie';

export type ListType =
  | 'trending'
  | 'now-playing'
  | 'upcoming'
  | 'airing-today'
  | 'on-the-air'
  | 'popular'
  | 'top-rated';

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

export type MediaListType = {
  page: string;
  mediaType: MediaType;
  listType: ListType;
  results: TvMedia[] | MovieMedia[];
};

export function isMovieMedia(media: Media): media is MovieMedia {
  return 'title' in media && 'release_date' in media;
}

export function isTvMedia(media: Media): media is TvMedia {
  return 'name' in media && 'first_air_date' in media;
}
