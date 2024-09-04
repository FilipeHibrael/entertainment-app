import { ListType, MediaType } from '@/types/types';

const API_URL = 'https://api.themoviedb.org/3/';
export const API_IMAGE_PATH = 'https://image.tmdb.org/t/p/w780';
export const IMDB_URL = 'https://www.imdb.com/title';

export function GET_TRENDING_MEDIA(mediaType: MediaType, pageNumber: number) {
  return { url: `${API_URL}/trending/${mediaType}/day?page=${pageNumber}` };
}

export function GET_MEDIA_LIST(
  mediaType: string,
  listType: ListType,
  pageNumber: number
) {
  return { url: `${API_URL}/${mediaType}/${listType}?page=${pageNumber}` };
}

export function GET_GENRE_LIST(mediaType: MediaType) {
  return { url: `${API_URL}/genre/${mediaType}/list` };
}

export function GET_MEDIA_LIST_BY_GENRE(
  mediaType: MediaType,
  genreId: number,
  pageNumber: number
) {
  return {
    url: `${API_URL}/discover/${mediaType}?page=${pageNumber}&with_genres=${genreId}`,
  };
}

export function GET_MEDIA_LIST_BY_SEARCH(
  mediaType: MediaType,
  searchTerm: string,
  pageNumber: number
) {
  return {
    url: `${API_URL}/search/${mediaType}?query=${searchTerm}&page=${pageNumber}`,
  };
}

export function GET_MEDIA_BY_ID(mediaType: MediaType, id: number) {
  return { url: `${API_URL}/${mediaType}/${id}` };
}

export function GET_MEDIA_CREDITS(mediaType: MediaType, id: number) {
  return { url: `${API_URL}/${mediaType}/${id}/credits` };
}

export function GET_EXTERNAL_IDS(mediaType: MediaType, id: number) {
  return { url: `${API_URL}/${mediaType}/${id}/external_ids` };
}

export function GET_POPULAR_ACTORS_LIST(pageNumber: number) {
  return { url: `${API_URL}/person/popular?page=${pageNumber}` };
}
