'use server';
import { GET_TRENDING_MEDIA } from '@/functions/api';
import { MediaList, MediaType } from '@/types/types';

export default async function getTrendingMedia(mediaType: MediaType) {
  try {
    const { url } = GET_TRENDING_MEDIA(mediaType);
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + process.env.API_KEY,
      },
    };

    const response = await fetch(url, options);
    if (!response.ok) throw new Error('Unexpected error, try again later.');
    const data = (await response.json()) as MediaList;

    return { data, error: '' };
  } catch (error) {
    return {
      data: null,
      error: error instanceof Error ? error.message : 'Server error.',
    };
  }
}
