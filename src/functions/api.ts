const API_URL = 'https://api.themoviedb.org/3/';

export function GET_TRENDING_MEDIA(media_type: string) {
  return { url: `${API_URL}/trending/${media_type}/day` };
}
