const API_URL = 'https://api.themoviedb.org/3/';
export const API_IMAGE_PATH = 'https://image.tmdb.org/t/p/original';

export function GET_TRENDING_MEDIA(mediaType: string) {
  return { url: `${API_URL}/trending/${mediaType}/day` };
}
