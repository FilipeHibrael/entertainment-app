'use server';
import { GET_MEDIA_BY_ID } from '@/functions/api';
import { MediaDetails, MediaType } from '@/types/types';

export default async function getMediaById(mediaType: MediaType, id: number) {
  try {
    const url = GET_MEDIA_BY_ID(mediaType, id).url;

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + process.env.API_KEY,
      },
      next: { revalidate: 300 },
    };

    const response = await fetch(url, options);
    if (!response.ok) throw new Error('Unexpected error, try again later.');
    const data = (await response.json()) as MediaDetails;

    return { data, error: '' };
  } catch (error) {
    return {
      data: null,
      error: error instanceof Error ? error.message : 'Server error.',
    };
  }
}
