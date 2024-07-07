import { ListType, MediaType } from '@/types/types';

const API_URL = 'https://api.themoviedb.org/3/';
export const API_IMAGE_PATH = 'https://image.tmdb.org/t/p/w780';

export function GET_TRENDING_MEDIA(mediaType: MediaType) {
  return { url: `${API_URL}/trending/${mediaType}/day` };
}

export function GET_MEDIA_LIST(mediaType: string, listType: ListType) {
  return { url: `${API_URL}/${mediaType}/${listType}` };
}
