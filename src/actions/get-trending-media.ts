'use server';
import { GET_TRENDING_MEDIA } from '@/functions/api';

export default async function getTrendingMedia(media_type: string) {
  try {
    const { url } = GET_TRENDING_MEDIA(media_type);
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + process.env.API_KEY,
      },
    };

    const response = await fetch(url, options);
    if (!response.ok) throw new Error('Unexpected error, try again later.');
    const data = await response.json();

    return { data, error: '' };
  } catch (error) {
    return {
      data: null,
      error: error instanceof Error ? error.message : 'Server error.',
    };
  }
}
