import { ListType, MediaType } from '@/types/types';

const API_URL = 'https://api.themoviedb.org/3/';
export const API_IMAGE_PATH = 'https://image.tmdb.org/t/p/w780';

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
